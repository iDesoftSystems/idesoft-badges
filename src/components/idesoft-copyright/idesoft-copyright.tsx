import { Component, getAssetPath, h } from "@stencil/core";

@Component({
    tag: 'idesoft-copyright',
    styleUrl: './idesoft-copyright.css',
    assetsDirs: ['assets'],
    shadow: true
})
export class IdesoftCopyright {

    codeBadges = getAssetPath(`./assets/code-badges.svg`);
    codeLightIcon = `${this.codeBadges}#code-light`;
    loveLightIcon = `${this.codeBadges}#love-light`;
    idesoftLightIcon = `${this.codeBadges}#idesoft-light`;

    render() {
        return (
            <div class="idesoft-copyright-outer">
                <div class="code-badge-icon">    
                    <svg 
                        preserveAspectRatio="xMinYMin meet"
                        viewBox="1071 0 115 90">
                        <use href={this.codeLightIcon}></use>
                    </svg>
                </div>
                <span>with</span>
                <div class="code-love-icon">
                    <svg 
                        preserveAspectRatio="xMinYMin meet"
                        viewBox="800 0 115 104">
                        <use href={this.loveLightIcon}></use>
                    </svg>
                </div>
                <span>by</span>
                <div class="idesoft-icon">
                    <a rel="noopener noreferrer" href="https://www.idesoft.co" target="_blank">
                        <svg 
                            preserveAspectRatio="xMinYMin meet"
                            viewBox="330 0 315 108">
                            <use href={this.idesoftLightIcon}></use>
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}