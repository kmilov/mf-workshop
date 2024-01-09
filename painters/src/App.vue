<template>
    <div class="app">
        <aside>
            <div class="logo border-bottom p-lg">
                <h1>🎨</h1>
            </div>
            <div>
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/" class="link">
                            <span class="link-icon">👨‍🎨</span>
                            Picasso
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/velazquez" class="link">
                            <span class="link-icon">👶🏻</span>
                            Velázquez
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/dali" class="link">
                            <span class="link-icon">👨🏻‍🎨</span>
                            Dalí
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="goya" class="link">
                            <span class="link-icon">🐐</span>
                            Goya
                        </router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="miro" class="link">
                            <span class="link-icon">🔴</span>
                            Miro
                        </router-link>
                    </li>
                </ul>
            </div>
        </aside>
        <main>
            <div class="header border-bottom p-lg">
                <h1>Painters from 🇪🇸</h1>
            </div>
            <div class="content p-lg">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>