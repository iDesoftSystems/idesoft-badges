import { newSpecPage } from "@stencil/core/testing"
import { IdesoftCopyright } from "./idesoft-copyright"

describe('idesoft-copyright', () => {
    it('renders', async () => {
        const { root } = await newSpecPage({
            components: [IdesoftCopyright],
            html: '<idesoft-copyright></idesoft-copyright>'
        })
        expect(root).toEqualHtml(`
        <idesoft-copyright>
            <mock:shadow-root>
                <div class="idesoft-copyright-outer">
                    <div class="code-badge-icon">
                        <svg preserveAspectRatio="xMinYMin meet" viewBox="1071 0 115 90">
                            <use href="/assets/code-badges.svg#code-light"></use>
                        </svg>
                    </div>
                    <span>
                    with
                    </span>
                    <div class="code-love-icon">
                        <svg preserveAspectRatio="xMinYMin meet" viewBox="800 0 115 104">
                            <use href="/assets/code-badges.svg#love-light"></use>
                        </svg>
                    </div>
                    <span>
                    by
                    </span>
                    <div class="idesoft-icon">
                        <a href="https://www.idesoft.co" rel="noopener noreferrer" target="_blank">
                            <svg preserveAspectRatio="xMinYMin meet" viewBox="330 0 315 108">
                                <use href="/assets/code-badges.svg#idesoft-light"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </mock:shadow-root>
        </idesoft-copyright>
        `)
    })
})