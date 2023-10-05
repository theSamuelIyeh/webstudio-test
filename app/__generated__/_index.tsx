/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Body as Body, Box as Box, Slot as Slot, Fragment as Fragment, Text as Text, Heading as Heading, Image as Image, Paragraph as Paragraph, Separator as Separator, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"0cd442d9-6e8f-458c-addc-9ea2fd327d31","name":"InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf","description":null,"projectId":"61b6ab32-9bc7-4992-b1a9-5cff4cca6deb","size":141136,"type":"font","createdAt":"2023-06-21T20:40:10.166Z","format":"ttf","meta":{"family":"Instrument Sans","variationAxes":{"wdth":{"name":"Width","min":75,"default":100,"max":100},"wght":{"name":"Weight","min":400,"default":400,"max":700}}}}]
export const pageData: PageData = {"page":{"id":"J2nbVM43DkzMoyypf1rlv","name":"Home","title":"Home","meta":{},"rootInstanceId":"ZIeodFSq1iLdULhN4vaOx","path":""}};
export const user: { email: string | null } | undefined = {"email":"105016275+theSamuelIyeh@users.noreply.github.com"};
export const projectId = "61b6ab32-9bc7-4992-b1a9-5cff4cca6deb";

const Page = (props: { scripts?: ReactNode }) => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="ZIeodFSq1iLdULhN4vaOx"
data-ws-component="Body">
<Slot
data-ws-id="2BwqKEMbt5WPoB9oN3MsW"
data-ws-component="Slot">
<Fragment
data-ws-id="xJtgQmkrBuZQhEMVpzorK"
data-ws-component="Fragment">
<Box
data-ws-id="96u8JtuVfD-yF888WHLGt"
data-ws-component="Box">
<Box
data-ws-id="Mha-j5VzRH1QpiW99U0TO"
data-ws-component="Box">
<Link
data-ws-id="Db8VrNJ_8FUarsz16JsN4"
data-ws-component="Link"
href={"/"}
target={"_self"}
prefetch={"intent"}>
{"Personal Portfolio"}
</Link>
<Box
data-ws-id="lbYGo_wtZGjL8W8rJWUt_"
data-ws-component="Box">
<Slot
data-ws-id="1lqwPxLGQZ59Nr36Yfx7c"
data-ws-component="Slot">
<Fragment
data-ws-id="KTHYMTbOxEc-ujz4x72s7"
data-ws-component="Fragment">
<Link
data-ws-id="jsBDQqWh6nwQfqz2-fqW2"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="ulmjBs1JlNxKeJxZSBvtH"
data-ws-component="Slot">
<Fragment
data-ws-id="f0h7V787oQi7EkkoSGd2r"
data-ws-component="Fragment">
<Link
data-ws-id="CTLCo4dE6o0Zp1Y64WDVO"
data-ws-component="Link"
href={"/contact"}
target={"_self"}
prefetch={"intent"}>
{"Contact"}
</Link>
</Fragment>
</Slot>
</Box>
<Dialog
data-ws-id="Cg_hnikgqLeo7SeIaGsdQ"
data-ws-component="@webstudio-is/sdk-components-react-radix:Dialog"
open={sheetOpen}
onOpenChange={onOpenChange}>
<DialogTrigger
data-ws-id="q7l-PtcT3g4MIO-vrtEur"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogTrigger">
<Button
data-ws-id="wEJJFljzRTiAF_cpXQFRH"
data-ws-component="Button">
<HtmlEmbed
data-ws-id="E2pUN9Fuf9yF2PGwFkpG2"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ws-id="5mydxjPrnu3KV3InfhbMS"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogOverlay">
<DialogContent
data-ws-id="w7r2eLLdKKy3IOuTuWMs2"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogContent">
<Slot
data-ws-id="jO66inynj632k0nZAeBrX"
data-ws-component="Slot">
<Fragment
data-ws-id="KTHYMTbOxEc-ujz4x72s7"
data-ws-component="Fragment">
<Link
data-ws-id="jsBDQqWh6nwQfqz2-fqW2"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="VIJgs2vetQjMjtYTVZJo0"
data-ws-component="Slot">
<Fragment
data-ws-id="f0h7V787oQi7EkkoSGd2r"
data-ws-component="Fragment">
<Link
data-ws-id="CTLCo4dE6o0Zp1Y64WDVO"
data-ws-component="Link"
href={"/contact"}
target={"_self"}
prefetch={"intent"}>
{"Contact"}
</Link>
</Fragment>
</Slot>
<Box
data-ws-id="jUGtjf4ggc_3oOkzy7rUl"
data-ws-component="Box"
tabIndex={0} />
<DialogClose
data-ws-id="BjSPkcKimsNQh4H0APRcv"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogClose">
<HtmlEmbed
data-ws-id="5clf4qVsq-9Sxqh5G3t7Q"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment>
</Slot>
<Box
data-ws-id="ppLFC1XU4GiAdC_li6CTc"
data-ws-component="Box">
<Box
data-ws-id="V3_aSo5Qdc9EfWhwtgwBA"
data-ws-component="Box">
<Heading
data-ws-id="lP7JORG5uofVNEtnoy4m2"
data-ws-component="Heading">
<Text
data-ws-id="c7Fme9SWiMgDWVj-fn38s"
data-ws-component="Text">
{"Personal"}
</Text>
<Text
data-ws-id="KZCh6G6Q_KgARIXqNC_nt"
data-ws-component="Text">
{"Portfolio"}
</Text>
</Heading>
<Box
data-ws-id="ZNyEy3Wff2E_z2F0gphgN"
data-ws-component="Box">
<Box
data-ws-id="qcHzlT41Ms2pqGz6NpU56"
data-ws-component="Box">
<Slot
data-ws-id="eVpSu3H8TAYUv75_SOlHS"
data-ws-component="Slot">
<Fragment
data-ws-id="mokklmAda8Z8UwZTk28w2"
data-ws-component="Fragment">
<Link
data-ws-id="6adbUrWzukBKKiWrzK2Vf"
data-ws-component="Link"
target={"_self"}
href={"/contact"}
prefetch={"intent"}>
<Box
data-ws-id="mwCfMTUzpV3CNyv4Nfsc3"
data-ws-component="Box" />
<Text
data-ws-id="a3eO_dpH3zkePHh_UdooP"
data-ws-component="Text">
{"Get in touch"}
</Text>
</Link>
</Fragment>
</Slot>
</Box>
<Box
data-ws-id="zbic7x_B9eHLqenra9vXk"
data-ws-component="Box">
<Slot
data-ws-id="tJsH23jq1X6oKbdgYvP6Y"
data-ws-component="Slot">
<Fragment
data-ws-id="N8xvoUUMU4iEZhTZ_YStb"
data-ws-component="Fragment">
<Link
data-ws-id="6PbVZPW_OOpYEIAUQXWbi"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="QTJJIkJHZRch3gjMePDDN"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M24.0516 3.3457H28.3452L18.9651 14.0671L30 28.6564H21.3598L14.5924 19.8081L6.84902 28.6564H2.55291L12.5858 17.1887L2 3.3457H10.8596L16.9767 11.4335L24.0516 3.3457ZM22.5448 26.0864H24.9238L9.56687 5.78073H7.01386L22.5448 26.0864Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="pw-IlOlpX1w6cPzVFrCFN"
data-ws-component="Slot">
<Fragment
data-ws-id="8Q0MFjkJh-vVI0hdQZYjl"
data-ws-component="Fragment">
<Link
data-ws-id="FyT-v6nLSDC-Jx_stzBTr"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="Rgqq3M76cgkuYQPFU5bWK"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 9.32426C12.313 9.32426 9.32426 12.313 9.32426 16C9.32426 19.6868 12.313 22.6756 16 22.6756C19.6868 22.6756 22.6756 19.6868 22.6756 16C22.6756 12.313 19.6868 9.32426 16 9.32426ZM16 20.3333C13.6067 20.3333 11.6666 18.3932 11.6666 16C11.6666 13.6067 13.6067 11.6666 16 11.6666C18.3932 11.6666 20.3333 13.6067 20.3333 16C20.3333 18.3932 18.3932 20.3333 16 20.3333Z\" fill=\"currentcolor\"></path>\n  <path d=\"M22.9422 10.6203C23.8038 10.6203 24.5023 9.92187 24.5023 9.06029C24.5023 8.19872 23.8038 7.50032 22.9422 7.50032C22.0807 7.50032 21.3822 8.19872 21.3822 9.06029C21.3822 9.92187 22.0807 10.6203 22.9422 10.6203Z\" fill=\"currentcolor\"></path>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 3C12.4694 3 12.0267 3.01497 10.6401 3.07823C9.25642 3.14139 8.3114 3.36112 7.48445 3.68251C6.62959 4.01473 5.90461 4.45925 5.1819 5.18195C4.45919 5.90466 4.01468 6.62964 3.68246 7.48451C3.36107 8.3114 3.14134 9.25642 3.07818 10.6401C3.01491 12.0267 3 12.4694 3 16C3 19.5306 3.01491 19.9733 3.07818 21.3599C3.14134 22.7436 3.36107 23.6886 3.68246 24.5155C4.01468 25.3704 4.45919 26.0953 5.1819 26.8181C5.90461 27.5408 6.62959 27.9853 7.48445 28.3175C8.3114 28.6389 9.25642 28.8587 10.6401 28.9218C12.0267 28.985 12.4694 29 16 29C19.5306 29 19.9733 28.985 21.3599 28.9218C22.7436 28.8587 23.6886 28.6389 24.5155 28.3175C25.3704 27.9853 26.0953 27.5408 26.8181 26.8181C27.5408 26.0953 27.9853 25.3704 28.3175 24.5155C28.6389 23.6886 28.8587 22.7436 28.9218 21.3599C28.985 19.9733 29 19.5306 29 16C29 12.4694 28.985 12.0267 28.9218 10.6401C28.8587 9.25642 28.6389 8.3114 28.3175 7.48451C27.9853 6.62964 27.5408 5.90466 26.8181 5.18195C26.0953 4.45925 25.3704 4.01473 24.5155 3.68251C23.6886 3.36112 22.7436 3.14139 21.3599 3.07823C19.9733 3.01497 19.5306 3 16 3ZM16 5.34239C19.4711 5.34239 19.8823 5.3556 21.2531 5.41814C22.5206 5.47599 23.2089 5.68777 23.667 5.86575C24.2738 6.10158 24.7069 6.38334 25.1618 6.83822C25.6167 7.29311 25.8984 7.72622 26.1342 8.33297C26.3123 8.79106 26.5241 9.4794 26.5819 10.7469C26.6444 12.1177 26.6577 12.5289 26.6577 16C26.6577 19.4711 26.6444 19.8823 26.5819 21.2531C26.5241 22.5206 26.3123 23.2089 26.1342 23.667C25.8984 24.2738 25.6167 24.7069 25.1618 25.1618C24.7069 25.6167 24.2738 25.8984 23.667 26.1342C23.2089 26.3123 22.5206 26.5241 21.2531 26.5819C19.8825 26.6444 19.4714 26.6577 16 26.6577C12.5286 26.6577 12.1175 26.6444 10.7469 26.5819C9.4794 26.5241 8.79106 26.3123 8.33297 26.1342C7.72617 25.8984 7.29311 25.6167 6.83817 25.1618C6.38329 24.7069 6.10153 24.2738 5.86575 23.667C5.68772 23.2089 5.47594 22.5206 5.41809 21.2531C5.35555 19.8823 5.34234 19.4711 5.34234 16C5.34234 12.5289 5.35555 12.1177 5.41809 10.7469C5.47594 9.4794 5.68772 8.79106 5.86575 8.33297C6.10153 7.72622 6.38329 7.29311 6.83817 6.83822C7.29311 6.38334 7.72617 6.10158 8.33297 5.86575C8.79106 5.68777 9.4794 5.47599 10.7469 5.41814C12.1177 5.3556 12.5289 5.34239 16 5.34239Z\" fill=\"currentcolor\"></path>\n</svg>\n"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="KefSbNMemnnkW7QFmpPPp"
data-ws-component="Slot">
<Fragment
data-ws-id="W2g-yNwK4cOqkj-wQ_Hs5"
data-ws-component="Fragment">
<Link
data-ws-id="u6F9s3Un8S0_Uh1A8E9SZ"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="AmaHiHJnHXWD5WMKCLQHs"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M9.10234 17.7908C9.39008 17.8867 9.77372 17.7908 9.86963 17.4072C9.96555 17.1194 10.0615 16.544 10.1574 16.2562C10.2533 15.8726 10.2533 15.7767 9.96555 15.4889C9.39008 14.8176 9.00643 13.9544 9.00643 12.7075C9.00643 9.06287 11.692 5.80188 16.1039 5.80188C19.9403 5.80188 22.0504 8.19967 22.0504 11.2688C22.0504 15.393 20.2281 18.9418 17.4466 18.9418C15.9121 18.9418 14.857 17.6949 15.1448 16.1603C15.6243 14.338 16.3916 12.4198 16.3916 11.077C16.3916 9.92607 15.7202 8.96696 14.4734 8.96696C12.9388 8.96696 11.692 10.5975 11.692 12.7075C11.692 14.0503 12.1715 15.0094 12.1715 15.0094C12.1715 15.0094 10.6369 21.6273 10.3492 22.8741C9.77372 25.176 10.2533 28.0534 10.3492 28.3411C10.3492 28.5329 10.6369 28.5329 10.7328 28.437C10.8288 28.2452 12.747 26.0392 13.3225 23.7373C13.5143 23.066 14.3775 19.805 14.3775 19.805C14.857 20.7641 16.2957 21.6273 17.9262 21.6273C22.53 21.6273 25.695 17.4072 25.695 11.7484C25.695 7.52829 22.0504 3.5 16.5834 3.5C9.77372 3.5 6.32091 8.39149 6.32091 12.5157C6.12909 14.8176 7.0882 17.0235 9.10234 17.7908Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="UDFF4KphjFiyREmNXEUUo"
data-ws-component="Slot">
<Fragment
data-ws-id="3jrC23nBls-CM78bjn-Dl"
data-ws-component="Fragment">
<Link
data-ws-id="jtzW3xMWxlp1BN8bObwp9"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="oFrcr5Qzs101Q1aHxu5wB"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.19097 9.38193C7.96372 9.38193 9.38193 7.96372 9.38193 6.19097C9.38193 4.41821 7.96372 3 6.19097 3C4.41821 3 3 4.41821 3 6.19097C3 7.96372 4.41821 9.38193 6.19097 9.38193ZM8.79225 11.6267H3.47397V28.9997H8.79225V11.6267ZM20.7266 16.0003C18.5993 16.0003 17.4174 17.4186 17.4174 19.9004C17.4174 22.5005 17.4174 29.0006 17.5356 29.0006H12.3355V11.6275H17.5356V13.9912C17.5356 13.9912 19.072 11.1548 22.7357 11.1548C26.3994 11.1548 28.9994 13.4003 28.9994 18.0095V29.0006H23.6812V19.9004C23.6812 17.4186 22.7357 16.0003 20.7266 16.0003Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="FoTg8dmc1ZZEANV_zLdAT"
data-ws-component="Slot">
<Fragment
data-ws-id="iaqPGmCuZsh9y6qNU9KNb"
data-ws-component="Fragment">
</Fragment>
</Slot>
<Slot
data-ws-id="73_jaj06FrAYej6RNwItr"
data-ws-component="Slot">
<Fragment
data-ws-id="V__dGEzfKk2gxPcXttGk7"
data-ws-component="Fragment">
</Fragment>
</Slot>
<Slot
data-ws-id="0nfPbJo0hV3vmbAwTY9vH"
data-ws-component="Slot">
<Fragment
data-ws-id="DB63_vpXUbIa1HEgVopI6"
data-ws-component="Fragment">
</Fragment>
</Slot>
<Slot
data-ws-id="McChrvP11wv5qkCrAe77O"
data-ws-component="Slot">
<Fragment
data-ws-id="vt2y9hNBQ-KXLTFaWun-S"
data-ws-component="Fragment">
</Fragment>
</Slot>
</Box>
</Box>
</Box>
<Box
data-ws-id="TCrysQO5sEZyd1l4X3nBk"
data-ws-component="Box">
<Image
data-ws-id="Z6kZLpRmcZdW6Mgw00Z21"
data-ws-component="Image"
src={"/assets/jason-wang-5MG8cQbw-T8-unsplash_StJdZ_IllIv__SQA5S3nB.jpg"} />
</Box>
</Box>
<Box
data-ws-id="MsJxTULp7bcWUAFt6UAM3"
data-ws-component="Box">
<Box
data-ws-id="KAmsc9OGb-b3dB2kFfmQK"
data-ws-component="Box">
<Box
data-ws-id="gg4RCfbaHti3yqiA2Ld3l"
data-ws-component="Box">
<Heading
data-ws-id="XuJ8plT3ahEzb3Pkf53lZ"
data-ws-component="Heading">
{"Recent Projects"}
</Heading>
<Link
data-ws-id="u8a-sM9t2FHMSpAjoXBVw"
data-ws-component="Link"
href={"/project"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="pTiyLxZUThABZ1ojz_jpU"
data-ws-component="Box">
<Image
data-ws-id="ID2cGdFuIE4BD3xEWV8Rs"
data-ws-component="Image"
src={"/assets/paul-weaver-nWidMEQsnAQ-unsplash_Hd9bvJ49YlnnKKVNOBIT4.jpeg"} />
</Box>
<Box
data-ws-id="qtq95VAy8DH0w8t6Io0eo"
data-ws-component="Box">
<Box
data-ws-id="UkhgrlarNAVElpq3kxqb1"
data-ws-component="Box">
<Text
data-ws-id="gPWjGYLJMymfF87fNCgpt"
data-ws-component="Text">
{"Creative Agency Solutions"}
</Text>
<Text
data-ws-id="WMaoGnCezx77Zpli_PKCv"
data-ws-component="Text">
{"Commercial"}
</Text>
</Box>
<Text
data-ws-id="BOUppRXSwi-6-3ckHettW"
data-ws-component="Text">
{"Industrial Chic: Revamping a Warehouse Space into a Stylish Loft Office"}
</Text>
</Box>
</Link>
<Box
data-ws-id="N_a2rLa7xYrDMCcCRarJJ"
data-ws-component="Box">
<Link
data-ws-id="1V2zXWkLtbcREV8ZV1XwW"
data-ws-component="Link"
href={"/project"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="84fAISJY4kQ5yiyeuIHXG"
data-ws-component="Box">
<Image
data-ws-id="HkWNt9DgoWrSjE9xqsCx-"
data-ws-component="Image"
src={"/assets/kara-eads-L7EwHkq1B2s-unsplash_hZnqf6_CYa3hSkI38E38B.jpg"} />
</Box>
<Box
data-ws-id="8nYTGNoGvphC0fgMd6JBd"
data-ws-component="Box">
<Box
data-ws-id="QFi8cwxcnd6yEL6_x97HG"
data-ws-component="Box">
<Text
data-ws-id="EmhyX_ZYBgDiNmuuCWn90"
data-ws-component="Text">
{"Urban Loft Living Co."}
</Text>
<Text
data-ws-id="molRrg7XZ0k7TPoCtlN5x"
data-ws-component="Text">
{"Residential"}
</Text>
</Box>
<Text
data-ws-id="bwJJlRcL7BLNNrVMTngbf"
data-ws-component="Text">
{"Urban Oasis: Transforming a Small City Apartment into a Serene Retreat"}
</Text>
</Box>
</Link>
<Link
data-ws-id="gCC-SlZn-JtNHCV6b9Hkx"
data-ws-component="Link"
href={"/project"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="-FqfarzMcnoaX0leYdqKj"
data-ws-component="Box">
<Image
data-ws-id="lQ797dHdUmEby28joyf60"
data-ws-component="Image"
src={"/assets/earl-wilcox-3xpQCOOe6hM-unsplash_2NerSMvO382JJHUQu1XdM.jpg"} />
</Box>
<Box
data-ws-id="FRQpUHVY0HTc_YTCF_7pD"
data-ws-component="Box">
<Box
data-ws-id="DZbuKu_0AuUPId28dKz_1"
data-ws-component="Box">
<Text
data-ws-id="61PVN-k3erS75-RYhDa7h"
data-ws-component="Text">
{"Coastal Resort Properties"}
</Text>
<Text
data-ws-id="OVvS-MmPv2kLNeGaCuWj_"
data-ws-component="Text">
{"Residential"}
</Text>
</Box>
<Text
data-ws-id="z4e0ul3p99nIFYdqtaYfU"
data-ws-component="Text">
{"Coastal Escape: Creating a Beach-Inspired Getaway in a Coastal Villa"}
</Text>
</Box>
</Link>
</Box>
<Box
data-ws-id="jjUi9exGKDyfj7BYecmXJ"
data-ws-component="Box">
<Link
data-ws-id="2Irt89OcCiJNtINsA8qS9"
data-ws-component="Link"
href={"/project"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="0UXekhD6MxZTDwnMQTiIJ"
data-ws-component="Box">
<Image
data-ws-id="CeyPoIBS4-99eJSvN-j6f"
data-ws-component="Image"
src={"/assets/charlesdeluvio-0Y1qUg1w2bs-unsplash_UR8HvTkMX3wmlnQBNynB0.jpg"} />
</Box>
<Box
data-ws-id="t8LE-aVT7guQYJ9G6r5Us"
data-ws-component="Box">
<Box
data-ws-id="5na3dDBiTcK-rQ3dwvnZH"
data-ws-component="Box">
<Text
data-ws-id="5MWOSieiqZ-ahz3sUMfLE"
data-ws-component="Text">
{"Tech Innovators Inc."}
</Text>
<Text
data-ws-id="2kEj5ixENhRrvyu2RnMRS"
data-ws-component="Text">
{"Commercial"}
</Text>
</Box>
<Text
data-ws-id="yXFxW6nyvKtOIWaW34fI5"
data-ws-component="Text">
{"Modern Minimalism: Designing a Sleek and Functional Office Space"}
</Text>
</Box>
</Link>
<Link
data-ws-id="FuJ6DTbqOeJu8CJkBfv-w"
data-ws-component="Link"
href={"/project"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="jRMukaHflqgjt8fkbuHoX"
data-ws-component="Box">
<Image
data-ws-id="2MP4DXr9VeiKSPl7fZbCD"
data-ws-component="Image"
src={"/assets/spacejoy-h2_3dL9yLpU-unsplash_hWjk4TmVrAs44kmu5MuQ2.jpg"} />
</Box>
<Box
data-ws-id="tugMU-jvv2EHpwvaJMr4Z"
data-ws-component="Box">
<Box
data-ws-id="3_gWMVXsOSJ769BylzUCg"
data-ws-component="Box">
<Text
data-ws-id="Te5PGvEfoZcCbJaF_ksjZ"
data-ws-component="Text">
{"Serene Wellness Center"}
</Text>
<Text
data-ws-id="nxSj5GKZ5iJbs0ZAFFToY"
data-ws-component="Text">
{"Hospitality"}
</Text>
</Box>
<Text
data-ws-id="RWyXMw_3rktSxEk3cpq9K"
data-ws-component="Text">
{"Rustic Elegance: Infusing a Mountain Retreat with Warmth and Sophistication"}
</Text>
</Box>
</Link>
</Box>
</Box>
<Separator
data-ws-id="O05ZH_1RPlzvUwFxwP9xV"
data-ws-component="Separator" />
<Box
data-ws-id="bDzQDxI44aWuZ7Xq3sKLW"
data-ws-component="Box">
<Box
data-ws-id="AZI2Q-fsGGJzz4iWOXRaF"
data-ws-component="Box">
<Heading
data-ws-id="NEuCtAJ3ZiYkBIcMx8SGM"
data-ws-component="Heading">
{"Testimonials"}
</Heading>
<Link
data-ws-id="wVeBc5FjMbczJQtCYBLrd"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="LcDZN1vLJ8198z9Vxzwy0"
data-ws-component="Box" />
<Text
data-ws-id="GiLV_sxTNyMnrya79McWj"
data-ws-component="Text">
{"See ALL"}
</Text>
</Link>
</Box>
<Slot
data-ws-id="vqJVuIhdAwjRB9kNJ2eoq"
data-ws-component="Slot">
<Fragment
data-ws-id="_ud-2SiNou4qqjIdgSBJG"
data-ws-component="Fragment">
<Box
data-ws-id="GpNhrX1yx6n0jl10dF8Kb"
data-ws-component="Box">
<Box
data-ws-id="bc7uZNjz8DitvfgjY0Xij"
data-ws-component="Box">
<Box
data-ws-id="FBsfJvWOZz57xLQGukbbP"
data-ws-component="Box">
<Box
data-ws-id="xz6WLuDyEugE-3YR-VvzX"
data-ws-component="Box">
<Image
data-ws-id="wRLtgAg8l32lVY527d7-a"
data-ws-component="Image"
src={"/assets/austin-wade-xjGZFo7X_nc-unsplash_v_-D6mc2Q7cYhwmxPTzua.jpeg"} />
</Box>
<Box
data-ws-id="-t7ij90neTKljlztraS9_"
data-ws-component="Box">
<Text
data-ws-id="jc2sxjOF2BkE83X7bVXP5"
data-ws-component="Text">
{"Alycia Harlee"}
</Text>
<Box
data-ws-id="_tMTXTSTEioTScVKWr_aq"
data-ws-component="Box">
<Text
data-ws-id="f2gP-oaoIPIGoyUS34egQ"
data-ws-component="Text">
{"Chief Executive Officer"}
</Text>
<Text
data-ws-id="8G__BB8oUDA3v2mfE0NjS"
data-ws-component="Text">
{"ABC Design Studio"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="y0VyTZ58Xtu2Ifaw-ScZR"
data-ws-component="Paragraph">
{"Throughout their tenure at our firm, Sam showcased exceptional design skills and a keen eye for detail."}
</Paragraph>
</Box>
<Box
data-ws-id="1xppM7mxT5u1HNt3O6vjg"
data-ws-component="Box">
<Box
data-ws-id="YK8S5_jXfZXUS-cvpP3-x"
data-ws-component="Box">
<Box
data-ws-id="M0jYBL_0H6GjF5HU6Xc8l"
data-ws-component="Box">
<Image
data-ws-id="QuwjLzWVkhrfwUrRIcP22"
data-ws-component="Image"
src={"/assets/foto-sushi-6anudmpILw4-unsplash_h5hwOTKnnNXVSB6AaMHYT.jpeg"} />
</Box>
<Box
data-ws-id="IFXEy7eBLjfGx54wrBRMm"
data-ws-component="Box">
<Text
data-ws-id="fbpk1MOufbnrlAS7-0e2F"
data-ws-component="Text">
{"Ethan Miller"}
</Text>
<Box
data-ws-id="bhr-Yr4vtwtYzJM1Rsusu"
data-ws-component="Box">
<Text
data-ws-id="yvZDEUpNGBlfsGbWYTtXx"
data-ws-component="Text">
{"Creative Director"}
</Text>
<Text
data-ws-id="YeYxIV6f-EVdgN7x7nmOC"
data-ws-component="Text">
{"ABC Design Studio"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="8mT6jzXA8MmXwqRzGb4Qw"
data-ws-component="Paragraph">
{"They consistently delivered innovative design concepts that captured clients' visions and surpassed their expectations."}
</Paragraph>
</Box>
<Box
data-ws-id="60RQF6JFJ-RAQsBJ2Cuj9"
data-ws-component="Box">
<Box
data-ws-id="7Pe6A_l33UQ_v8MbGn-u1"
data-ws-component="Box">
<Box
data-ws-id="GJOGeYd3tEYA7kuRYjZK1"
data-ws-component="Box">
<Image
data-ws-id="ekYAbXLnhQlXheH7MB25X"
data-ws-component="Image"
src={"/assets/sigmund-jzz_3jWMzHA-unsplash_nEaxM5M4m3fhbdJ20Absz.jpeg"} />
</Box>
<Box
data-ws-id="3kFDpbDVIbcztDyyzs4Kw"
data-ws-component="Box">
<Text
data-ws-id="YGkQh6XxaQcUO8TY9MgZB"
data-ws-component="Text">
{"Olivia Ramirez"}
</Text>
<Box
data-ws-id="__hf7Iaz9uJMTLsYmLJtn"
data-ws-component="Box">
<Text
data-ws-id="EIs4PmkJTeD1LGbu2HIeb"
data-ws-component="Text">
{"Project Manager"}
</Text>
<Text
data-ws-id="UneqwVXIMNI3_pIhJTE_-"
data-ws-component="Text">
{"DEF Design Studio"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="hTlASXUu5-5STKOb4lErr"
data-ws-component="Paragraph">
{"Sam fostered excellent relationships with clients, project stakeholders, and team members."}
</Paragraph>
</Box>
</Box>
</Fragment>
</Slot>
</Box>
<Separator
data-ws-id="gk_0oQLwChLI7eCjIwy44"
data-ws-component="Separator" />
<Box
data-ws-id="AMEzAWG1QVZMbzdAxB4D1"
data-ws-component="Box">
<Box
data-ws-id="AQwu3b_8m02E4jXO0rEZA"
data-ws-component="Box">
<Box
data-ws-id="YJfr2b69g-kNX5_fb5o3w"
data-ws-component="Box">
<Box
data-ws-id="MzT6XRg4NGCjqfI3p_k76"
data-ws-component="Box">
<Image
data-ws-id="-huyBjl9RZUrhHTj9YDLT"
data-ws-component="Image"
src={"/assets/austin-wade-X6Uj51n5CE8-unsplash_59qxcdMMHV3PiWJ1NzE2f.jpg"} />
</Box>
<Heading
data-ws-id="VyvTgERSNTq1gY2R2NGhC"
data-ws-component="Heading">
{"Nice to meet you"}
</Heading>
</Box>
<Paragraph
data-ws-id="ICXLZ-P7lqG8Jx086aeey"
data-ws-component="Paragraph">
{"I absolutely love what I do – turning ordinary spaces into jaw-dropping, functional masterpieces is my jam!"}
</Paragraph>
<Link
data-ws-id="uXXQeqjrgR7-hrk8y2si2"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
<Box
data-ws-id="1x4pvqBHukYqzB2VtwOl5"
data-ws-component="Box" />
<Text
data-ws-id="x9CAzlOONoIFDgPjoQTG1"
data-ws-component="Text">
{"MORE ABOUT ME"}
</Text>
</Link>
</Box>
<Box
data-ws-id="Vxlhuh_w4zFZikiNV3fN_"
data-ws-component="Box">
<Image
data-ws-id="Zs-H15mKK3w4XlXW7J5pf"
data-ws-component="Image"
src={"/assets/austin-wade-X6Uj51n5CE8-unsplash_59qxcdMMHV3PiWJ1NzE2f.jpg"} />
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="h08EMSJol0QjxBmKy3V8P"
data-ws-component="Slot">
<Fragment
data-ws-id="xDwYGoBL0X8XsemJHxYiP"
data-ws-component="Fragment">
<Box
data-ws-id="Qou31XllJYT26n09gjjfK"
data-ws-component="Box">
<Box
data-ws-id="uaFg9A2MNBT52i5xAm4Ls"
data-ws-component="Box">
<Heading
data-ws-id="WZJ4jFDzkcRE5JytzwAaT"
data-ws-component="Heading">
{"Interested in Working Together?"}
</Heading>
<Box
data-ws-id="FmgUCTfCpmMOnWKHPKFCa"
data-ws-component="Box">
<Slot
data-ws-id="MbE4J6m7ifO9QdkxAnZWk"
data-ws-component="Slot">
<Fragment
data-ws-id="mokklmAda8Z8UwZTk28w2"
data-ws-component="Fragment">
<Link
data-ws-id="6adbUrWzukBKKiWrzK2Vf"
data-ws-component="Link"
target={"_self"}
href={"/contact"}
prefetch={"intent"}>
<Box
data-ws-id="mwCfMTUzpV3CNyv4Nfsc3"
data-ws-component="Box" />
<Text
data-ws-id="a3eO_dpH3zkePHh_UdooP"
data-ws-component="Text">
{"Get in touch"}
</Text>
</Link>
</Fragment>
</Slot>
<Heading
data-ws-id="0TRt1pdKJMfvRIlBUTBzy"
data-ws-component="Heading">
{"Get In Touch Today"}
</Heading>
</Box>
</Box>
</Box>
</Fragment>
</Slot>
<Slot
data-ws-id="NVwIx2R_taB1EAwOYWQQP"
data-ws-component="Slot">
<Fragment
data-ws-id="Sqo-08kC612xBXEGEpCR5"
data-ws-component="Fragment">
<Box
data-ws-id="r5wQMOKM4NvzlRhS5WnDb"
data-ws-component="Box">
<Box
data-ws-id="ff2fXuDD-KCiPEJVjceDP"
data-ws-component="Box">
<Box
data-ws-id="Kh5wpiV1Z_VAxZA4dhFTb"
data-ws-component="Box">
<Heading
data-ws-id="B9x0UxD7gcxRcQhTXUmVC"
data-ws-component="Heading">
{"Personal Portfolio"}
</Heading>
<Text
data-ws-id="ajViIE373VUS6rm54pX0J"
data-ws-component="Text">
{"All content copyright © 2023 Webstudio Inc."}
{""}
<br />
{""}
{"This template is made with Webstudio!"}
</Text>
</Box>
<Box
data-ws-id="tM8dPXkcKRz-WZTVAa0ph"
data-ws-component="Box">
<Box
data-ws-id="cd6YH6tYQTabCwaLeI-TS"
data-ws-component="Box">
<Link
data-ws-id="sRwNc3d8Nwa_pvoSNxu61"
data-ws-component="Link"
href={"/"}
target={"_self"}
prefetch={"intent"}>
{"Home"}
</Link>
<Link
data-ws-id="nsCqZIYwzqAeZfa0vfnPe"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
<Link
data-ws-id="Idz3pBF-3trlZBK83RsX9"
data-ws-component="Link"
href={"/contact"}
target={"_self"}
prefetch={"intent"}>
{"Contact"}
</Link>
</Box>
<Box
data-ws-id="An5Hqri8VS210D_i4udTa"
data-ws-component="Box">
<Link
data-ws-id="YeyHOxU7xzFOh6qDvps6c"
data-ws-component="Link"
href={"https://twitter.com/home"}
target={"_blank"}
prefetch={"none"}>
{"Twitter ↗"}
</Link>
<Link
data-ws-id="wl8KqP-RiLmCsFDI-HoBL"
data-ws-component="Link"
href={"https://www.facebook.com/"}
target={"_blank"}
prefetch={"none"}>
{"Facebook ↗"}
</Link>
<Link
data-ws-id="q8-b64QoyappI5W9O6YvL"
data-ws-component="Link"
href={"https://www.pinterest.com/"}
target={"_blank"}
prefetch={"none"}>
{"Pinterest ↗"}
</Link>
<Link
data-ws-id="N1LyioBmUGaJFqAplXy8s"
data-ws-component="Link"
href={"https://www.linkedin.com/feed/"}
target={"_blank"}
prefetch={"none"}>
{"LinkedIn ↗"}
</Link>
</Box>
</Box>
<Text
data-ws-id="O47BhBkIhS3jDRjMAHpCg"
data-ws-component="Text">
{"All content copyright © 2023 Webstudio Inc."}
{""}
<br />
{""}
{"This template is made with Webstudio!"}
</Text>
</Box>
</Box>
</Fragment>
</Slot>
<Slot
data-ws-id="BvP3d8WfI8pmvEWq82eRU"
data-ws-component="Slot">
<Fragment
data-ws-id="TpTp2RjbCtW5ofWZSiagR"
data-ws-component="Fragment">
<Link
data-ws-id="UZtdu19rzJ0V6K_-TQfot"
data-ws-component="Link"
href={"https://webstudio.is/"}
prefetch={"none"}
target={"_self"}
aria-label={""}
rel={"nofollow"}>
<Image
data-ws-id="xP5kvTqG1Ud1udrWZC0cD"
data-ws-component="Image"
src={"/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg"}
alt={""}
loading={"eager"}
aria-hidden={true} />
<Text
data-ws-id="dt6LFeOnmEKrCnCGPuGeB"
data-ws-component="Text">
{"Built with Webstudio"}
</Text>
</Link>
</Fragment>
</Slot>
{props.scripts}
</Body>
}


export { Page }


  export const pagesPaths = new Set(["","/project","/about","/contact"])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
