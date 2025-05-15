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