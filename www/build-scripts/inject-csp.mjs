import fs from 'fs-extra';

class CSPInjector {
    constructor() {
        this.configPath = 'ps-config.json';
        this.indexPath = './www/index.html';
    }

    inject() {
        try {
            const config = this.loadConfig();
            if(config === false){
                console.log('[AZENTIO] Inject-CSP: No config found , exiting!');
                process.exit(0);
            }
            let html = this.loadHTML();

            const updatedHTML = this.updateCSP(html, config);
            if (updatedHTML === false) {
                console.log('[AZENTIO] Inject-CSP: No WEBVIEWS urls found , exiting!');
                process.exit(0);
                
            }
            console.log('[AZENTIO] Inject-CSP: Found Valid WebVIEW urls, updating html.index');
            this.saveHTML(updatedHTML);
            process.exit(0);

        } catch (error) {
            console.log('[AZENTIO] Inject-CSP: CSP injection failed:', error.message);
            process.exit(0);
        }
    }

    loadConfig() {
        if (!fs.existsSync(this.configPath)) {
            console.log('[AZENTIO] Inject-CSP: ps-config.json not found at ' + this.configPath);
            return false;
        }
        return JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
    }

    loadHTML() {
        return fs.readFileSync(this.indexPath, 'utf8');
    }

    updateCSP(html, config) {
        const webviewUrlsObj = config?.MAIN_CONFIG?.WEBVIEW_URLS;

        if (!webviewUrlsObj || typeof webviewUrlsObj !== 'object') {
            console.log('[AZENTIO] Inject-CSP: No WEBVIEW URLs found in config, skipping CSP update');
            return false;
        }
        const urls = Object.values(webviewUrlsObj);
        if (!urls.length) {
            console.log('[AZENTIO] Inject-CSP: No WEBVIEW URLs found in config, skipping CSP update');
            return false;
        }
        let modified = false;
        urls.forEach((webviewUrl) => {
            const domain = this.extractDomain(webviewUrl);
            if (!domain) {
                console.log('[AZENTIO] Inject-CSP: Could not extract domain from URL:', webviewUrl);
                return;
            }
            console.log('[AZENTIO] Inject-CSP: Found WEBVIEW URL, Adding to CSP:', domain);
            html = this.updateDirective(html, 'frame-src', domain);
            modified = true;
        });
        return modified ? html : false;
    }

    extractDomain(url) {
        try {
            const urlObj = new URL(url);
            return `${urlObj.protocol}//${urlObj.hostname}`;
        } catch (error) {
            return null;
        }
    }

    updateDirective(html, directive, domain) {
        const pattern = new RegExp(`(${directive}[^;]*)('self'[^;]*)`, 'i');
        const replacement = `$1 $2 ${domain}`;

        if (pattern.test(html)) {
            return html.replace(pattern, replacement);
        }
        const cspPattern = /(<meta[^>]*http-equiv=["']Content-Security-Policy["'][^>]*content=["'])([^"']*)(["'][^>]*>)/i;
        return html.replace(cspPattern, `$1$2; ${directive} 'self' ${domain}$3`);
    }
    saveHTML(html) {
        fs.writeFileSync(this.indexPath, html, 'utf8');
    }
}
new CSPInjector().inject();