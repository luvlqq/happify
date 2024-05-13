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
                    <a href="index.html" data-type="index-link">happify documentation</a>
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
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-26560c9a3b2aa4d0fdaae1495d03555e7b2f3e37580546a36c45d5e578195fc74e9a5fa2bc86ca6d4e0da311f37c10aa32e4ca56bb4c309c1fdeed83fe024ec3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-26560c9a3b2aa4d0fdaae1495d03555e7b2f3e37580546a36c45d5e578195fc74e9a5fa2bc86ca6d4e0da311f37c10aa32e4ca56bb4c309c1fdeed83fe024ec3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-26560c9a3b2aa4d0fdaae1495d03555e7b2f3e37580546a36c45d5e578195fc74e9a5fa2bc86ca6d4e0da311f37c10aa32e4ca56bb4c309c1fdeed83fe024ec3"' :
                                            'id="xs-controllers-links-module-AppModule-26560c9a3b2aa4d0fdaae1495d03555e7b2f3e37580546a36c45d5e578195fc74e9a5fa2bc86ca6d4e0da311f37c10aa32e4ca56bb4c309c1fdeed83fe024ec3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' :
                                            'id="xs-controllers-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' :
                                        'id="xs-injectables-links-module-AuthModule-e02eb72c3e147b36a7bdd53ecdaaef421a715fc8fec7813a40fca160371a00a8c5973b0edc98f26b77f2239bf69a149a0298747bad664f474f226fce692369bc"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AwsModule.html" data-type="entity-link" >AwsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' : 'data-bs-target="#xs-controllers-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' :
                                            'id="xs-controllers-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' }>
                                            <li class="link">
                                                <a href="controllers/AwsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AwsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' : 'data-bs-target="#xs-injectables-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' :
                                        'id="xs-injectables-links-module-AwsModule-049f238b56b29c51174ae9c2ae1f83d7a675de0c864798bfe14b71c7a1e1c7d1ff4a16996f308935c585d7b73b7fc4a507e514639f253447a0cf9060e4fdfc67"' }>
                                        <li class="link">
                                            <a href="injectables/AwsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AwsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExercisesModule.html" data-type="entity-link" >ExercisesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' : 'data-bs-target="#xs-controllers-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' :
                                            'id="xs-controllers-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' }>
                                            <li class="link">
                                                <a href="controllers/ExercisesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExercisesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' : 'data-bs-target="#xs-injectables-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' :
                                        'id="xs-injectables-links-module-ExercisesModule-aa0a1688398a3b639e6ca137cd150ac1b39fa6d83f800bde760d534ccde873957ecee8c36014606c8c18932c4e3897701c13ed0316a1e26654c3d29d4d2958dc"' }>
                                        <li class="link">
                                            <a href="injectables/ExercisesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExercisesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MealsModule.html" data-type="entity-link" >MealsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' : 'data-bs-target="#xs-controllers-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' :
                                            'id="xs-controllers-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' }>
                                            <li class="link">
                                                <a href="controllers/MealsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' : 'data-bs-target="#xs-injectables-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' :
                                        'id="xs-injectables-links-module-MealsModule-a703bc6d0ab5188150e4873de918e34aff61dea48b824da09cc27a5976083e0ea794f0c5d65b84fb9ea814da52467087af62634958f2b2bfcd6d8fb9ea2c8d7c"' }>
                                        <li class="link">
                                            <a href="injectables/MealsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' : 'data-bs-target="#xs-controllers-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' :
                                            'id="xs-controllers-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' : 'data-bs-target="#xs-injectables-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' :
                                        'id="xs-injectables-links-module-NotificationsModule-d5de5b352afd0eaafbb73b6190f44a27afa701897f91c04cb1c76073b8d585f5221c7f38850f9ac82df515123ed0b5a9590674e13eb9e7513bd0f7b438f36486"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NutritionModule.html" data-type="entity-link" >NutritionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' : 'data-bs-target="#xs-controllers-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' :
                                            'id="xs-controllers-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' }>
                                            <li class="link">
                                                <a href="controllers/NutritionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' : 'data-bs-target="#xs-injectables-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' :
                                        'id="xs-injectables-links-module-NutritionModule-d058aac0eb36ae7a914e2c09de5087914a699dc1bfc916e9f63f7a2793f4c8fd7a9795f2cca2f2a2cd15644d9d35edaec99f059ef0cff0a7c58c482b96f0177b"' }>
                                        <li class="link">
                                            <a href="injectables/NutritionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NutritionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StripeModule.html" data-type="entity-link" >StripeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' : 'data-bs-target="#xs-controllers-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' :
                                            'id="xs-controllers-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' }>
                                            <li class="link">
                                                <a href="controllers/StripeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' : 'data-bs-target="#xs-injectables-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' :
                                        'id="xs-injectables-links-module-StripeModule-d5cd7487531315df51a9b3ece605c0bf4d99bab5319a0ff3ed5686512b322ad956f83ac4f89e1f32f2965522a2631d0329ea2140bf3fa98cae51d66561e9d911"' }>
                                        <li class="link">
                                            <a href="injectables/StripeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StripeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' :
                                            'id="xs-controllers-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' :
                                        'id="xs-injectables-links-module-UsersModule-5cd3d32b85c9a0eb62b6a960864f853e6593d7ae4e99db26a2ce8ee56b5f3c84cfee48ef66e0a78a26cc52b21bc7a96de3daad3914477a8dc2a8101910ad550f"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkoutsModule.html" data-type="entity-link" >WorkoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' : 'data-bs-target="#xs-controllers-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' :
                                            'id="xs-controllers-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' }>
                                            <li class="link">
                                                <a href="controllers/WorkoutsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' : 'data-bs-target="#xs-injectables-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' :
                                        'id="xs-injectables-links-module-WorkoutsModule-82b6fb9d501c930d07918d4d7a492ebde605d537795b1132a408d1f3b8d61f950c3018b41e612f35b3bdccf29ebf5d9f09349315df0c9d2ab7d1f19c9fb57d74"' }>
                                        <li class="link">
                                            <a href="injectables/WorkoutsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});