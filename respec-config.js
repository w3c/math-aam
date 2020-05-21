var respecConfig = {
	github: "w3c/math-aam",
	doJsonLd: true,
	specStatus: "CG-DRAFT",
	shortName: "math-aam-1.0",
	editors: [
		{
			name: "Joanmarie Diggs",
			company: "Igalia, S.L.",
			companyURL: "https://www.igalia.com",
			w3cid: 68182
		},
		{
			name: "Michael Cooper",
			company: "W3C",
			companyURL: "http://www.w3.org",
			w3cid: 34017
		}
	],
	copyrightStart:  "2018",
	edDraftURI: "https://w3c.github.io/math-aam/",
	//license: "document",
	wg:           "Getting Math onto Web Pages Community Group",
	//wgPatentURI:  "https://www.w3.org/2004/01/pp-impl/83726/status",
	wgURI:        "https://www.w3.org/community/mathonwebpages/",
	wgPublicList: "public-mathonwebpages",

    // Spec URLs
    ariaSpecURLs: {
      "ED": "https://w3c.github.io/aria/",
      "WD" : "https://www.w3.org/TR/wai-aria-1.2/",
      "FPWD" : "https://www.w3.org/TR/wai-aria-1.2/",
      "CR" : "https://www.w3.org/TR/wai-aria-1.2/",
      "PR" : "https://www.w3.org/TR/wai-aria-1.2/",
      "REC": "https://www.w3.org/TR/wai-aria-1.2/"
    },
    coreMappingURLs: {
      "ED": "https://w3c.github.io/core-aam/",
      "WD" : "https://www.w3.org/TR/core-aam-1.2/",
      "FPWD": "https://www.w3.org/TR/core-aam-1.2/",
      "CR": "https://www.w3.org/TR/core-aam-1.2/",
      "PR": "https://www.w3.org/TR/core-aam-1.2/",
      "REC": "https://www.w3.org/TR/core-aam-1.2/"
    },

	preProcess: [ linkCrossReferences ]
};
