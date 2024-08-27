<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <div id="footer-container" class="max-w-screen-xl p-6 py-8 mx-auto lg:py-16 md:p-10 lg:p-12">
            <hr id="footer-divider" class="my-6 border-white border-opacity-20 sm:mx-auto lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-3xl font-bold text-white hover:text-pink-200 transition duration-300">
                        <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                        BlockChainSight
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-white text-opacity-80 hover:text-opacity-100 transition duration-300">
                    © 2023 BlockChainSight. Empowering blockchain analysis with real-time insights.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
