"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[577],{897:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=r(2540),n=r(3023);const a={},t="Libraries",l={id:"guides/libraries",title:"Libraries",description:"You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.",source:"@site/docs/guides/libraries.md",sourceDirName:"guides",slug:"/guides/libraries",permalink:"/docs/guides/libraries",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/libraries.md",tags:[],version:"current",lastUpdatedAt:1710986143,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Desktop Application",permalink:"/docs/guides/desktop"},next:{title:"Emptying Library Trash",permalink:"/docs/guides/trash"}},o={},c=[{value:"Creating libraries",id:"creating-libraries",level:2},{value:"Scanner",id:"scanner",level:3},{value:"Empty trash automatically after every scan",id:"empty-trash-automatically-after-every-scan",level:4},{value:"Force directory modified time",id:"force-directory-modified-time",level:4},{value:"Scan on startup",id:"scan-on-startup",level:4},{value:"Scan interval",id:"scan-interval",level:4},{value:"One-Shots directory",id:"one-shots-directory",level:4},{value:"Scan for these file types",id:"scan-for-these-file-types",level:4},{value:"Directory exclusions",id:"directory-exclusions",level:4},{value:"Options",id:"options",level:3},{value:"Analysis",id:"analysis",level:4},{value:"Compute hash for files",id:"compute-hash-for-files",level:5},{value:"Compute hash for pages",id:"compute-hash-for-pages",level:5},{value:"Analyze page dimensions",id:"analyze-page-dimensions",level:5},{value:"File management",id:"file-management",level:4},{value:"Automatically repair incorrect file extensions",id:"automatically-repair-incorrect-file-extensions",level:5},{value:"Automatically convert to CBZ",id:"automatically-convert-to-cbz",level:5},{value:"Series cover",id:"series-cover",level:4},{value:"Metadata",id:"metadata",level:3},{value:"Edit a library",id:"edit-a-library",level:2},{value:"Delete a library",id:"delete-a-library",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"libraries",children:"Libraries"}),"\n",(0,s.jsx)(i.p,{children:"You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users."}),"\n",(0,s.jsx)(i.p,{children:"Each library has a root folder, and no library can share any part of their path."}),"\n",(0,s.jsxs)(i.p,{children:["For example if you have a library with a root path of ",(0,s.jsx)(i.code,{children:"/books/mangas"}),", you can't create a library with a root path of ",(0,s.jsx)(i.code,{children:"/books"}),", because the two root paths would overlap. You can however create a library with a root path of ",(0,s.jsx)(i.code,{children:"/books/comics"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"creating-libraries",children:"Creating libraries"}),"\n",(0,s.jsx)(i.p,{children:"From the web interface:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["click on the ",(0,s.jsx)(i.em,{children:"+"})," icon next to ",(0,s.jsx)(i.em,{children:"Libraries"})," in the sidebar ",(0,s.jsx)("img",{src:"/assets/media/guides/libraries/library-add.png",style:{verticalAlign:"middle",maxHeight:"32px"}})]}),"\n",(0,s.jsxs)(i.li,{children:["choose a ",(0,s.jsx)(i.em,{children:"Name"})," for your library"]}),"\n",(0,s.jsxs)(i.li,{children:["click the ",(0,s.jsx)(i.em,{children:"Browse"})," button and select a root folder containing your books"]}),"\n",(0,s.jsxs)(i.li,{children:["click ",(0,s.jsx)(i.em,{children:"Add"})]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/assets/media/guides/libraries/library-add-dialog.png",style:{maxHeight:"300px"},alt:"Add Library Dialog"}),"\n",(0,s.jsx)(i.p,{children:"You can also specify extra options."}),"\n",(0,s.jsx)(i.h3,{id:"scanner",children:"Scanner"}),"\n",(0,s.jsx)("img",{src:"/assets/media/guides/libraries/library-add-scanner.png",style:{maxHeight:"400px"},alt:"Add Library Dialog Scanner"}),"\n",(0,s.jsx)(i.h4,{id:"empty-trash-automatically-after-every-scan",children:"Empty trash automatically after every scan"}),"\n",(0,s.jsxs)(i.p,{children:["See ",(0,s.jsx)(i.a,{href:"/docs/guides/trash#automatically-empty-trash",children:"Emptying library trash"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"force-directory-modified-time",children:"Force directory modified time"}),"\n",(0,s.jsx)(i.p,{children:"This will force the last modified time of a directory as the maximum from its own last modified time and the last modified time from all the books inside the directory. This should be used only if your filesystem does not update the last modified time of a directory when files inside it are modified (Google Drive for instance)."}),"\n",(0,s.jsx)(i.h4,{id:"scan-on-startup",children:"Scan on startup"}),"\n",(0,s.jsx)(i.p,{children:"If enabled, the library will be scanned when Komga starts."}),"\n",(0,s.jsx)(i.h4,{id:"scan-interval",children:"Scan interval"}),"\n",(0,s.jsx)(i.p,{children:"Choose to scan all of your libraries on a time-based interval. Choose the interval to use from the dropdown. Available frequencies:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"disabled"}),"\n",(0,s.jsx)(i.li,{children:"hourly"}),"\n",(0,s.jsx)(i.li,{children:"every 6 hours"}),"\n",(0,s.jsx)(i.li,{children:"every 12 hours"}),"\n",(0,s.jsx)(i.li,{children:"daily"}),"\n",(0,s.jsx)(i.li,{children:"weekly"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The scan interval is based on when Komga started, or when you changed that setting for the library. For instance, if you have it set to \u201cevery 6 hours\u201d and you start your server at 12:35, then a scan will be started around 18:35."}),"\n",(0,s.jsx)(i.h4,{id:"one-shots-directory",children:"One-Shots directory"}),"\n",(0,s.jsxs)(i.p,{children:["See ",(0,s.jsx)(i.a,{href:"/docs/guides/oneshots",children:"One-Shots"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"scan-for-these-file-types",children:"Scan for these file types"}),"\n",(0,s.jsx)(i.p,{children:"This will configure the scanner to only look for files with specific file extensions. Available types:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Comic Book archives: ",(0,s.jsx)(i.code,{children:"cbz"}),", ",(0,s.jsx)(i.code,{children:"zip"}),", ",(0,s.jsx)(i.code,{children:"cbr"}),", ",(0,s.jsx)(i.code,{children:"rar"})]}),"\n",(0,s.jsxs)(i.li,{children:["PDF: ",(0,s.jsx)(i.code,{children:"pdf"})]}),"\n",(0,s.jsxs)(i.li,{children:["Epub: ",(0,s.jsx)(i.code,{children:"epub"})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"directory-exclusions",children:"Directory exclusions"}),"\n",(0,s.jsx)(i.p,{children:"You can specify any pattern to exclude directory subtrees from the scan."}),"\n",(0,s.jsx)(i.p,{children:"Any directory for which the full path contains any of the configured patterns will be ignored during the scan."}),"\n",(0,s.jsxs)(i.p,{children:["Patterns are checked against ",(0,s.jsx)(i.strong,{children:"any part of the directory path"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"#recycle"})," will match on:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"/data/books/Comics/#recycle"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"/data/books/Comics/My weirdly named #recycle comic"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["To match only directories starting with the provided string, prefix the pattern with ",(0,s.jsx)(i.code,{children:"/"}),", like ",(0,s.jsx)(i.code,{children:"/#recycle"})]})}),"\n",(0,s.jsx)(i.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)("img",{src:"/assets/media/guides/libraries/library-add-options.png",style:{maxHeight:"500px"},alt:"Add Library Dialog Options"}),"\n",(0,s.jsx)(i.h4,{id:"analysis",children:"Analysis"}),"\n",(0,s.jsx)(i.h5,{id:"compute-hash-for-files",children:"Compute hash for files"}),"\n",(0,s.jsx)(i.p,{children:'Komga will compute a filehash for your files. This is required for the "restore from trash bin" functionality to work, and to detect duplicate files.'}),"\n",(0,s.jsx)(i.p,{children:"This can consume lots of resources on large libraries or slow hardware."}),"\n",(0,s.jsx)(i.h5,{id:"compute-hash-for-pages",children:"Compute hash for pages"}),"\n",(0,s.jsxs)(i.p,{children:["Komga will compute a filehash for the first and last 3 pages in each book (",(0,s.jsx)(i.code,{children:"cbz"})," only). Those are used to detect duplicate pages."]}),"\n",(0,s.jsx)(i.p,{children:"This can consume lots of resources on large libraries or slow hardware."}),"\n",(0,s.jsx)(i.h5,{id:"analyze-page-dimensions",children:"Analyze page dimensions"}),"\n",(0,s.jsx)(i.p,{children:"Komga will retrieve each page's dimensions (width and height). This is useful for:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"properly displaying landscape pages in the web reader, when using double pages"}),"\n",(0,s.jsx)(i.li,{children:'comparing page dimensions in the "Import" dialog'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This can consume lots of resources on large libraries or slow hardware."}),"\n",(0,s.jsx)(i.h4,{id:"file-management",children:"File management"}),"\n",(0,s.jsx)(i.h5,{id:"automatically-repair-incorrect-file-extensions",children:"Automatically repair incorrect file extensions"}),"\n",(0,s.jsxs)(i.p,{children:["Files with an incorrect extension will be automatically renamed in the background. For example a ",(0,s.jsx)(i.code,{children:"zip"})," file with a ",(0,s.jsx)(i.code,{children:".cbr"})," extension will be renamed to ",(0,s.jsx)(i.code,{children:".cbz"}),"."]}),"\n",(0,s.jsx)(i.h5,{id:"automatically-convert-to-cbz",children:"Automatically convert to CBZ"}),"\n",(0,s.jsxs)(i.p,{children:["Books in ",(0,s.jsx)(i.code,{children:"rar"}),"/",(0,s.jsx)(i.code,{children:"cbr"})," format (RAR4 only) will be converted to ",(0,s.jsx)(i.code,{children:"cbz"})," automatically in the background. The ",(0,s.jsx)(i.code,{children:"zip"})," files are created with the ",(0,s.jsx)(i.code,{children:"DEFLATE"})," method without compression."]}),"\n",(0,s.jsx)(i.h4,{id:"series-cover",children:"Series cover"}),"\n",(0,s.jsx)(i.p,{children:"Choose which book cover is used for the series."}),"\n",(0,s.jsx)(i.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsx)("img",{src:"/assets/media/guides/libraries/library-add-metadata.png",style:{maxHeight:"600px"},alt:"Add Library Dialog Metadata"}),"\n",(0,s.jsxs)(i.p,{children:["Check the ",(0,s.jsx)(i.a,{href:"/docs/guides/scan-analysis-refresh#refresh-metadata",children:"Refresh Metadata"})," section to know more about what they do."]}),"\n",(0,s.jsx)(i.h2,{id:"edit-a-library",children:"Edit a library"}),"\n",(0,s.jsxs)(i.p,{children:["To edit a library, look for the action menu icon ",(0,s.jsx)("img",{src:"/assets/media/guides/action-menu-icon.png",style:{verticalAlign:"middle",maxHeight:"32px"}})," and click on ",(0,s.jsx)(i.em,{children:"Edit"}),"."]}),"\n",(0,s.jsxs)(i.admonition,{type:"warning",children:[(0,s.jsxs)(i.p,{children:["If you change the root folder of a library, and ",(0,s.jsx)(i.strong,{children:"the new path doesn't share anything with the previous path"}),", you will lose all your series, books and read progress for that library."]}),(0,s.jsxs)(i.p,{children:["If you change the path ",(0,s.jsx)(i.strong,{children:"for a parent directory of the current path"}),", you will not lose your content."]}),(0,s.jsxs)(i.p,{children:["If you change the path ",(0,s.jsx)(i.strong,{children:"for a child directory of the current path"}),", you will lose part of your content."]})]}),"\n",(0,s.jsx)(i.h2,{id:"delete-a-library",children:"Delete a library"}),"\n",(0,s.jsxs)(i.p,{children:["To delete a library, look for the action menu icon ",(0,s.jsx)("img",{src:"/assets/media/guides/action-menu-icon.png",style:{verticalAlign:"middle",maxHeight:"32px"}})," and click on ",(0,s.jsx)(i.em,{children:"Delete"}),"."]}),"\n",(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.p,{children:"Deleting a library will remove all series and books contained in this library. Read progress for all those books will be deleted."}),(0,s.jsx)(i.p,{children:"Your media files will not be affected."}),(0,s.jsx)(i.p,{children:"This cannot be undone."})]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3023:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>l});var s=r(3696);const n={},a=s.createContext(n);function t(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);