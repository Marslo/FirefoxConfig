// ==UserScript==
// @name          marslo
// @namespace     http://userstyles.org
// @description	  Stylish for myself
// @author        marslojiao
// @homepage      https://userstyles.org/styles/148804
// @run-at        document-start
// @version       0.20170928122851
// ==/UserScript==
(function() {var css = [
	"/* i really want this to be global */",
	"",
	"/*",
	"",
	"   	kbd, pre, code: HTML tag. E.g.: <kbd><\/kbd>, <pre><\/pre>",
	"   	pre *, code *, div.line-numbers, div.code : HTML TAG with Class. E.g.: <div class=\"code\"><\/div>; <div class=\"line-numbers\"><\/div>",
	"	.line, .line-number, .monospaced: Specified Class Name.",
	"*/",
	"",
	"span.vsts-build-log,											/* TFS Log Content */",
	"div.ace_layer *{												/* Jenkins Pipeline Script Textarea*/",
	"    font-family: \"Ubuntu Mono\", \"Consolas\", \"Menlo\", \"Monaco\" !important;",
	"}",
	"",
	"textarea,														/* Stylish Editor area*/",
	"kbd,",
	"pre,",
	"code,",
	"pre *,",
	"code *,",
	"div.code *,",
	"table.code,",
	"tr.line_holder *,												/* Gitlab Diff content */",
	"div.ace_content *,												/* http://www.myregexp.com */",
	".solarized-dark,",
	".EnlighterJS *,													/* http://thisdavej.com */",
	".js-file-line *,												/* Github Codeblock */",
	".editor,														/* Jenkins Console Editor*/",
	".changeset-message,												/* Jenkins Change list */",
	".node-log-frame,												/* Jenkins Stage View */",
	"#terminal *{													/* shellcheck */",
	"    font-family: \"Ubuntu Mono\", \"monofur\", \"Menlo\" !important;",
	"    font-size: 20px !important;",
	"}",
	"",
	"",
	"input,",
	"select,",
	"a.jstree-anchor,												/* Artifactory Tree List */",
	"div.line-numbers *,",
	".line-numbers,",
	".js-line-number,												/* Github Codeblock */",
	".line,",
	".line-number,",
	".CodeMirror-line,",
	"pre.console-output, 											/* Jenkins Console Output finished */",
	".console-output *, 												/* Jenkins Console Output */",
	".blockInner,													/* Json Viewer */",
	".jsonpOpener,													/* Json Viewer */",
	".timestamp{",
	"    font-family: \"Ubuntu Mono\", \"Consolas\", \"Menlo\", \"Monaco\" !important;",
	"    font-size: 20px !important;",
	"}",
	"",
	"/* 	\"fa\":       														Gitlab",
	"   	\"octicon\":  														Atom & Github",
	"   	\"win-icon\": 														Microsoft",
	"   	\"icon-dropdown\", \"navbar-icon\", \"icon-home\" and \"icon-\":         	Sonar",
	"	\"ace_\":																Jenkins",
	"    \"ico\":           													Sourceforge",
	"	\"pc\" and \"DPvwYc\" and \"Da\":											Gmail",
	"	\"ms-Icon\":															MS OneDrive",
	"	\"sort-caret\":														Blackduck Hub",
	"	\"drop\", \"bowtie-\", \"view-\":											TFS",
	"	\"pl-\":																Github",
	"*/",
	"",
	"/*",
	"Mac default fonts: , \"LucidaGrande\", \"Kailasa\", \"Thonburi\", \"GeezaPro\", \"KohinoorBangla-Regular\"",
	"*/",
	"*:not(code):not(h1):not(h2):not(pre):not(kbd):not(icon):not(input):not(button):not(i):not([class*=\"icon\"]):not([class*=\"fa\"]):not([class*=\"octicon\"]):not([class*=\"win-icon\"]):not([class*=\"icon-\"]):not([class*=\"ace_\"]):not([class*=\"ico\"]):not([class*=\"pc\"]):not([class*=\"DPvwYc\"]):not([class*=\"para\"]):not([class*=\"ms-Icon\"]):not([class*=\"sort-caret\"]):not([class*=\"Da\"]):not([class*=\"drop\"]):not([class*=\"bowtie-\"]):not([class*=\"view-\"]):not([class*=\"pl-\"]):not([class*=\"avatar-\"]) {",
	"    font-family: \"Titillium\", \"Gisha\", \"Candara\", \".AppleSystemFallback-Regular\";",
	"    font-size: 16px",
	"    /* font-size: 100%; */",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
