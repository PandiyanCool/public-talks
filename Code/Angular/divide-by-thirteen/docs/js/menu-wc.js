'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">divide-by-thirteen</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4336db2297e2506d8c4214ed7f8032ae"' : 'data-target="#xs-components-links-module-AppModule-4336db2297e2506d8c4214ed7f8032ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4336db2297e2506d8c4214ed7f8032ae"' :
                                            'id="xs-components-links-module-AppModule-4336db2297e2506d8c4214ed7f8032ae"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SampleModule.html" data-type="entity-link">SampleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' : 'data-target="#xs-components-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' :
                                            'id="xs-components-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' }>
                                            <li class="link">
                                                <a href="components/EfficientUser.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EfficientUser</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' : 'data-target="#xs-directives-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' :
                                        'id="xs-directives-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' }>
                                        <li class="link">
                                            <a href="directives/SampleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SampleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' : 'data-target="#xs-pipes-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' :
                                            'id="xs-pipes-links-module-SampleModule-cce49caf707ad1a125bd4b2bc220422a"' }>
                                            <li class="link">
                                                <a href="pipes/SamplePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SamplePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SamplePipe.html" data-type="entity-link">SamplePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SampleService.html" data-type="entity-link">SampleService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});