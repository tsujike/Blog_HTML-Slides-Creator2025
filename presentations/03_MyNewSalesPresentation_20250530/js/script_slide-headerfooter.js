/*
================================================================================
ファイル名: script_slide-headerfooter.js (テンプレートコア)
作成日: YYYY-MM-DD
更新日: YYYY-MM-DD
バージョン: 1.0

【説明】
このJavaScriptファイルは、「Blog_HTML-Slide-Creator2025」テンプレートシステムにおいて、
印刷時 (`beforeprint` イベント) に各スライドにヘッダーとフッターを動的に挿入し、
印刷後 (`afterprint` イベント) にそれらを削除する機能を提供します。
フッターは2ページ目以降にのみ挿入されます。

【使い方】
新しいプレゼンテーションプロジェクトを作成する際、このファイルをプロジェクトの
`js` フォルダに `script_slide-headerfooter.js` (または指定のファイル名) という名前でコピーしてください。
このファイルは、通常、プロジェクトのベースHTML (`index.html`) の <body> 終了タグ直前で
<script src="js/script_slide-headerfooter.js" defer></script>
のようにして読み込まれます。

【思想・運用について】
- 印刷時のみに必要な要素を動的に制御することで、HTML構造をシンプルに保ちます。
- テンプレートコアの更新は非可逆であり、過去のプロジェクトには自動反映されません。

【依存関係】
- HTML: `.slide` クラスを持つ要素が各スライドのコンテナとして存在すること。
- CSS: _css/slide-headerfooter.css (または同等のCSSファイル) で、
       `.print-header`, `.print-footer` などのクラスに対するスタイルが定義されていること。
- 画像: ヘッダーに表示するロゴ画像 (`logo-small.png`) は、
        このスクリプトが実行されるHTMLファイルからの相対パスで解決できる場所に
        配置されている必要があります。
        テンプレートコアの `_common_assets/images/logo-small.png` を、
        各プロジェクトの適切な場所（例: `images/logo-small.png` やプロジェクトルート）に
        コピーして使用することを想定しています。
================================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    // ロゴ画像のパス設定 (プロジェクトごとに調整が必要な場合がある)
    // このJSファイルからの相対パスではなく、HTMLファイルからの相対パスで指定
    const logoImagePath = "images/logo-small.png"; // 例: プロジェクトのimagesフォルダに配置する場合
    // const logoImagePath = "logo-small.png"; // 例: プロジェクトのルートに配置する場合
    // const logoImagePath = "../_common_assets/images/logo-small.png"; // テンプレートコアを参照する場合 (非推奨)

    function insertHeadersFooters() {
        removeHeadersFooters();
        const totalPages = slides.length;

        slides.forEach((slide, index) => {
            const pageNum = index + 1;

            // --- ヘッダー要素を作成 ---
            const header = document.createElement('div');
            header.classList.add('print-header');
            header.innerHTML = `
            <div class="header-right">
            <img src="${logoImagePath}" alt="Logo" class="print-logo">
            </div>
            `;
            slide.prepend(header);

            // --- フッター要素を作成 (2ページ目以降) ---
            if (index > 0) {
                const footer = document.createElement('div');
                footer.classList.add('print-footer');
                footer.innerHTML = `
                    <div class="footer-center">
                        <span class="footer-text">TG GLOBAL CO.LTD.</span>
                    </div>
                    <div class="footer-right">
                        <span class="print-page-number-footer"> Page ${pageNum} / ${totalPages}</span>
                    </div>
                `;
                slide.appendChild(footer);
            }
        });
    }

    function removeHeadersFooters() {
        const existingHeaders = document.querySelectorAll('.print-header');
        const existingFooters = document.querySelectorAll('.print-footer');
        existingHeaders.forEach(el => el.remove());
        existingFooters.forEach(el => el.remove());
    }

    window.addEventListener('beforeprint', insertHeadersFooters);
    window.addEventListener('afterprint', removeHeadersFooters);
});