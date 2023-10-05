/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Box as Box, Fragment as Fragment, Heading as Heading, Text as Text, Body as Body, Slot as Slot, Image as Image, Input as Input, Label as Label, Button as Button, Textarea as Textarea, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"0cd442d9-6e8f-458c-addc-9ea2fd327d31","name":"InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf","description":null,"projectId":"61b6ab32-9bc7-4992-b1a9-5cff4cca6deb","size":141136,"type":"font","createdAt":"2023-06-21T20:40:10.166Z","format":"ttf","meta":{"family":"Instrument Sans","variationAxes":{"wdth":{"name":"Width","min":75,"default":100,"max":100},"wght":{"name":"Weight","min":400,"default":400,"max":700}}}}]
export const pageData: PageData = {"page":{"id":"_hbsaVcZ3JzsK-VD648Aj","name":"Contact","title":"Contact","meta":{"description":""},"rootInstanceId":"aEvNY7a3nvKzBGDNZ1lYY","path":"/contact"}};
export const user: { email: string | null } | undefined = {"email":"105016275+theSamuelIyeh@users.noreply.github.com"};
export const projectId = "61b6ab32-9bc7-4992-b1a9-5cff4cca6deb";

const Page = (props: { scripts?: ReactNode }) => {
let [formState, set$formState] = useState<any>("initial")
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let formInitial = (formState === 'initial' || formState === 'error');
let formInitial_1 = (formState === 'initial' || formState === 'error');
let formInitial_2 = (formState === 'initial' || formState === 'error');
let formInitial_3 = (formState === 'initial' || formState === 'error');
let formSuccess = (formState === 'success');
let formError = (formState === 'error');
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
let onStateChange = (state: any) => {
formState = state
set$formState(formState)
}
return <Body
data-ws-id="aEvNY7a3nvKzBGDNZ1lYY"
data-ws-component="Body">
<Slot
data-ws-id="xMyP9T2okC6sFyGnxuXUh"
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
data-ws-id="9KlIT2HrRp0TqPnjH6KHm"
data-ws-component="Box">
<Box
data-ws-id="6QR_MZJwrNu8TrrLCvtxz"
data-ws-component="Box">
<Box
data-ws-id="jCXCPsPq_WtK96YACbHY4"
data-ws-component="Box">
<Heading
data-ws-id="nWHhtw-SusVLiWOxqEp0d"
data-ws-component="Heading">
<Text
data-ws-id="fbkjC28uNtnw5Qq7rN4_d"
data-ws-component="Text">
{"Get In"}
</Text>
<Text
data-ws-id="RGoRnb56bIx5nriytrAyE"
data-ws-component="Text">
{"Touch"}
</Text>
</Heading>
<Box
data-ws-id="zD7okuIqXFYgF7heBCmqj"
data-ws-component="Box">
<Box
data-ws-id="PI_YhRUkJYMeeHMEReSqT"
data-ws-component="Box">
<Slot
data-ws-id="HKU6ORX-8qQf6iQdyeCuw"
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
data-ws-id="poWG8B7dyH5wPfcmI6MbB"
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
data-ws-id="OiLJNmsOKs-rLwwsggxH5"
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
data-ws-id="TDvzlzW0zfWpnXGIBRmQ7"
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
data-ws-id="JG9o8mBSOLpRM47_4PYLy"
data-ws-component="Slot">
<Fragment
data-ws-id="iaqPGmCuZsh9y6qNU9KNb"
data-ws-component="Fragment">
</Fragment>
</Slot>
<Slot
data-ws-id="Bdyg35Sm47W35vvGs1V4y"
data-ws-component="Slot">
<Fragment
data-ws-id="V__dGEzfKk2gxPcXttGk7"
data-ws-component="Fragment">
</Fragment>
</Slot>
<Slot
data-ws-id="V7236VmMhY2sHBfqmqChZ"
data-ws-component="Slot">
<Fragment
data-ws-id="DB63_vpXUbIa1HEgVopI6"
data-ws-component="Fragment">
</Fragment>
</Slot>
<Slot
data-ws-id="Fah096F9jHEDH3tTJ-u36"
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
data-ws-id="zRe0C8caTqBrSStYpxAdk"
data-ws-component="Box">
<Image
data-ws-id="71crxfFFsxxlvUgOLAFzR"
data-ws-component="Image"
src={"/assets/surface-EjAbk2U3REE-unsplash_i_xnM86Z-9-RlfTSFRgzj.jpeg"} />
</Box>
</Box>
<Box
data-ws-id="u7YbKEnNdDslq_FzTteW3"
data-ws-component="Box">
<Form
data-ws-id="J2oFruzB31kbc1ENbICf7"
data-ws-component="Form"
state={formState}
onStateChange={onStateChange}>
{formInitial &&
<Box
data-ws-id="FK6KBRG6nuEntobDHyo8K"
data-ws-component="Box">
<Label
data-ws-id="air5T8QJhZnXzuuUiKQ9U"
data-ws-component="Label">
{"Name"}
</Label>
<Input
data-ws-id="CKGoQLKZW9nTRuliqKvj0"
data-ws-component="Input"
name={"name"}
type={"text"}
required={true} />
</Box>
}
{formInitial_1 &&
<Box
data-ws-id="KIuur10POS-lttylZ66FZ"
data-ws-component="Box">
<Label
data-ws-id="uYE_0VhwzKborTSSFOSj6"
data-ws-component="Label">
{"Email address"}
</Label>
<Input
data-ws-id="Xf76p9y-nNlfGi8jt5rFA"
data-ws-component="Input"
name={"email"}
type={"email"}
required={true} />
</Box>
}
{formInitial_2 &&
<Box
data-ws-id="c3okvYVzNdB6XOZfSr1JW"
data-ws-component="Box">
<Label
data-ws-id="8JRuaxelpuQBCliYyPh9Q"
data-ws-component="Label">
{"Tell me about your project"}
</Label>
<Textarea
data-ws-id="F_tVuUv4lv_OgIlZOMnKS"
data-ws-component="Textarea"
name={"Message"}
required={true} />
</Box>
}
{formInitial_3 &&
<Button
data-ws-id="AC_xTSDSuOraM_QbimJ7i"
data-ws-component="Button">
<Box
data-ws-id="IfTAJL3lyJ43jltsXRmpx"
data-ws-component="Box" />
<Text
data-ws-id="ekjN90Vm5bXwdm42Vi8Fm"
data-ws-component="Text"
tag={"span"}>
{"Submit"}
</Text>
</Button>
}
{formSuccess &&
<Box
data-ws-id="9LDRTw86N3j488LpIms91"
data-ws-component="Box">
<Text
data-ws-id="HORbPqghgCBDot6F3yVXW"
data-ws-component="Text">
{"Thank you for getting in touch!"}
</Text>
</Box>
}
{formError &&
<Box
data-ws-id="pxtPpJBrW5essZCYn2uNO"
data-ws-component="Box">
<Text
data-ws-id="t-aWiWRHRskRsWooakHoP"
data-ws-component="Text">
{"Sorry, something went wrong."}
</Text>
</Box>
}
</Form>
<Text
data-ws-id="zNVC_alnP9XKgZ7EbF_0e"
data-ws-component="Text">
{"Ready to transform your space into something extraordinary? Get in touch, and let's bring your vision to life!"}
</Text>
</Box>
</Box>
<Slot
data-ws-id="ttDTNXwSdvS4pJKb9TF5d"
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
data-ws-id="F3L981u7TUTcQJbDzrQ1r"
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
  
