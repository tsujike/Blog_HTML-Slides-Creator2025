# HTML Slides Creator 2025 (プロジェクト名仮)

## 概要

このプロジェクトは、HTML、CSS、JavaScriptをベースとした、ブラウザで表示・印刷・PDF出力が可能なプレゼンテーション資料作成ツールです。
施策や顧客ごとに最適化された資料を効率的に作成し、チームでの共同作業を円滑にすることを目的としています。

## 特徴

*   **ブラウザベース:** 特別なソフトウェアなしに、ウェブブラウザで資料を閲覧・表示できます。
*   **印刷・PDF対応:** 作成した資料は、ブラウザの印刷機能を通じて紙に印刷したり、PDFとして保存・配布したりできます。
*   **共通パーツ化:** よく使うスライドやセクション（例: 表紙、会社概要、価格表など）を共通パーツとして管理し、手動コピー＆ペーストで再利用することで、資料作成の効率化と一貫性の担保を目指します。
*   **CSSによる柔軟なスタイリング:** 画面表示用と印刷時専用のCSSを分離し、それぞれのメディアに最適化されたデザインを適用できます。

## ディレクトリ構造 (推奨)

Blog_HTML-Slides-Creator2025/
├── css/
│ ├── style.css # 画面表示用のメインCSS (各共通パーツCSSを@import)　共通パーツはbase_style.cssに
│ └── print.css # 印刷時専用のメインCSS (@pageルール、@media printブロック) 共通パーツはbase_style_print.cssに
│
├── js/
│ └── script.js # 共通のJavaScript (例: ヘッダー/フッターの動的挿入など)
│
├── assets/
│ ├── images/
│ │ ├── common/ # 共通で使うロゴなど (例: logo.png)
│ │ └── slides/ # 各スライド特有の画像 (例: some_image.jpg)
│ └── fonts/ # (Webフォントを使用する場合)
│
├── _common_parts/            # 再利用可能なHTML断片とその基本スタイル
│   ├── 00_slide_template.html          # (任意) スライドの基本枠組みテンプレート
│   ├── 00_slide_template.css           # (任意) 上記テンプレートの基本スタイル
│   ├── 01_title_slide.html
│   ├── 01_title_slide.css
│   ├── 02_agenda_slide.html
│   ├── 02_agenda_slide.css
│   ├── 03_company_profile_slide.html
│   ├── 03_company_profile_slide.css
│   ├── 04_mission_vision_slide.html
│   ├── 04_mission_vision_slide.css
│   ├── 05_problem_statement_slide.html
│   ├── 05_problem_statement_slide.css
│   ├── 06_solution_overview_slide.html
│   ├── 06_solution_overview_slide.css
│   ├── 07_product_detail_slide.html
│   ├── 07_product_detail_slide.css
│   ├── 08_case_study_slide.html
│   ├── 08_case_study_slide.css
│   ├── 09_team_introduction_slide.html
│   ├── 09_team_introduction_slide.css
│   ├── 10_pricing_table_slide.html
│   ├── 10_pricing_table_slide.css
│   ├── 11_comparison_table_slide.html
│   ├── 11_comparison_table_slide.css
│   ├── 12_call_to_action_slide.html
│   ├── 12_call_to_action_slide.css
│   ├── 13_thank_you_slide.html
│   ├── 13_thank_you_slide.css
│   ├── 14_section_divider_slide.html
│   ├── 14_section_divider_slide.css
│   ├── 15_image_full_bleed_slide.html
│   ├── 15_image_full_bleed_slide.css
│   ├── base_style_print.css # 印刷時専用のテンプレートCSS (@pageルール、@media printブロック)
│   ├── base_style.css # 画面表示用のテンプレートCSS (各共通パーツCSSを@import)
│   ├── base_templete_index.html
│   └── script_slidefooter.html
│
├── presentations/ # 各個別プレゼンテーション資料
│ ├── [資料名フォルダ1]/ # 例: client_A_proposal_202405
│ │ ├── index.html # その資料のHTML本体　共通パーツはbase_templete_index.htmlに。
│ │ └── assets/ # (任意) その資料特有の画像など
│ └── [資料名フォルダ2]/
│ └── index.html
│
├── .gitignore # Gitで無視するファイルやフォルダを指定
└── README.md # プロジェクトの説明、運用ルールなど



### ディレクトリ構造の解説

*   **`css/`**:
    *   `style.css`: 画面表示用のスタイル全体を統括します。このファイルの先頭で `_common_parts/` 内の各共通パーツ用CSSファイルを `@import` します。
    *   `print.css`: 印刷時専用のスタイルを統括します。`@page` ルールや、`@media print` ブロック内で画面表示用スタイルを上書きしたり、印刷特有のスタイルを指定します。共通パーツのスタイルは `style.css` 経由で読み込まれたものをベースに、必要に応じてこのファイルで上書き・調整します。

*   **`js/`**:
    *   `script.js`: プロジェクト共通で使うJavaScriptファイルを配置します（例: 印刷時のみヘッダー/フッターを動的に挿入する処理など）。

*   **`assets/`**:
    *   画像やフォントなど、プロジェクト全体で共有される静的なアセットファイルを格納します。
    *   `images/common/`: 全ての資料で共通して使うロゴなどを配置します。
    *   `images/slides/`: 特定のスライドタイプで汎用的に使える画像などを配置します（必要に応じて）。

*   **`_common_parts/`**:
    *   再利用したいHTMLの断片（例: `01_title_slide.html`）と、それに対応する**基本的な画面表示用スタイル**を記述したCSSファイル（例: `01_title_slide.css`）をペアで格納します。
    *   ファイル名の先頭には連番を振るなどして、整理・管理しやすくします。
    *   `(任意)` となっている `00_slide_template.html` と `00_slide_template.css` は、全てのスライドの共通の枠組み（例: `<section class="slide"><div class="slide-content">...</div></section>`のような構造や、基本的なパディングなど）を提供するテンプレートとして用意することも有効です。

*   **`presentations/`**:
    *   実際に作成する個別のプレゼンテーション資料ごとにサブディレクトリを作成します。ディレクトリ名は内容がわかるように命名します。
    *   各サブディレクトリ内の `index.html` が、その資料の本体となります。このHTMLファイルから、`css/style.css` と `css/print.css` をリンクします。
    *   各資料に特有の画像などは、その資料のサブディレクトリ内にさらに `assets/` フォルダを作成して格納すると整理しやすくなります。

*   **`.gitignore`**:
    *   OSが自動生成するファイル（例: `.DS_Store`, `Thumbs.db`, `desktop.ini`）や、開発中に生成される一時ファイル、`node_modules` フォルダ（もしNode.js関連ツールを使う場合）などをGitの管理対象から外すために使用します。

*   **`README.md`**:
    *   このファイルです。プロジェクトの目的、使い方、開発ルールなどを記述し、チームメンバー（将来の自分自身も含む）がスムーズにプロジェクトに参加・貢献できるようにします。

## 運用ルール・開発フロー

### 共通パーツの作成と利用

1.  **共通パーツの定義:**
    *   複数の資料で繰り返し使用されるスライドやセクション（表紙、会社概要、価格表など）を「共通パーツ」として定義します。
    *   各共通パーツは、`_common_parts/` ディレクトリ内に、内容を表すHTMLファイル（例: `01_title_slide.html`）と、それに対応する基本的な画面表示用CSSファイル（例: `01_title_slide.css`）のペアで作成・管理します。

2.  **共通パーツHTMLファイルのコメント規約:**
    *   各共通パーツHTMLファイルの冒頭には、以下の情報をコメントとして記述し、パーツの仕様と使い方を明確にします。
        ```html
        <!--
        ================================================================================
        パーツ名: [パーツの具体的な名前] (例: タイトルスライドコンテンツ)
        ファイル名: [このファイル自身の名前] (例: 01_title_slide.html)
        作成日: YYYY-MM-DD
        更新日: YYYY-MM-DD
        バージョン: 1.0

        【説明】
        [このパーツの目的や機能の簡潔な説明]

        【使い方】
        1. このファイルの内容 (HTML構造部分) をコピーしてください。
        2. 挿入したいHTMLファイルの適切な場所にペーストしてください。
           (例: <section class="slide ..."><div class="slide-content"> [ここにペースト] </div></section>)

        【依存関係】
        - CSS:
            - 基本スタイルは対応するCSSファイル ([対応CSSファイル名]) に記述。
            - 当該CSSはメインCSS (例: css/style.css) から @import 想定。
            - (必要に応じて親クラスなどの依存情報を追記)
        - JavaScript: (あれば記述、なければ「特になし」)

        【カスタマイズのポイント】
        [編集可能な箇所や注意点を記述]

        【基本的なHTML構造の注意】
        [HTML断片としての利用、正しい入れ子構造などの注意点を記述]
        ================================================================================
        -->

        <!-- ↓↓↓ ここからパーツのHTML構造 ↓↓↓ -->
        <!-- (実際のHTMLコード) -->
        <!-- ↑↑↑ ここまでパーツのHTML構造 ↑↑↑ -->
        ```

3.  **共通パーツの利用方法:**
    *   新しいプレゼンテーション資料を作成する際、または既存の資料にパーツを追加する際は、`_common_parts/` ディレクトリから必要なHTML断片を**手動でコピー＆ペースト**して利用します。

4.  **共通パーツのCSSの役割と管理:**
    *   `_common_parts/` 内の各CSSファイルは、対応するHTMLパーツが画面に表示されたときに「最低限このように見える」という基本的なスタイルを提供します。
    *   これらのパーツCSSは、メインの画面表示用CSS (`css/style.css`) の先頭で `@import` することで一元的に読み込まれます。
    *   印刷時特有のスタイル調整は、主に `css/print.css` 内の `@media print` ブロックで、必要に応じてこれらの共通パーツのスタイルを上書き・追加する形で行います。

### 個別プレゼンテーション資料の作成

1.  `presentations/` ディレクトリ以下に、資料の内容を表す名前で新しいサブディレクトリを作成します。
2.  そのサブディレクトリ内に `index.html` ファイルを作成します。
3.  `index.html` の `<head>` タグ内で、`css/style.css` と `css/print.css` をリンクします。
    ```html
    <link rel="stylesheet" href="../../css/style.css" media="screen">
    <link rel="stylesheet" href="../../css/print.css" media="print">
    ```
    (HTMLファイルからの相対パスは適宜調整してください)
4.  `_common_parts/` から必要な共通パーツのHTMLをコピー＆ペーストし、内容を編集して資料を組み立てます。
5.  資料特有の画像などは、その資料のサブディレクトリ内に `assets/` フォルダを作成して格納します。

### Git運用（ブランチ戦略など - 今後の検討課題）

*   （現時点では `main` ブランチへの直接コミットが中心ですが、将来的には以下のようなブランチ運用も検討できます）
*   新しい資料の作成や、大きな機能追加・修正は、専用のフィーチャーブランチ (`feature/...`) で行い、完了後にプルリクエスト経由で `main` ブランチにマージします。
*   共通パーツの更新も、専用のブランチ (`update/common-parts/...` など) で行い、影響範囲を確認した上でマージします。
*   共通パーツを更新した際は、それを利用している既存の個別資料への反映作業が発生する可能性があるため、イシュー管理などを活用してタスクを明確化します。（手動コピー運用のため）

## 今後の展望

*   JavaScriptによるインタラクティブ機能の追加（スライドショー、アニメーションなど）。
*   共通パーツのさらなる充実と、より柔軟なカスタマイズ方法の検討。
*   （もし必要であれば）ビルドプロセスの導入による開発効率の向上。

---
