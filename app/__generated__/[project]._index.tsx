/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Box as Box, Fragment as Fragment, Text as Text, Heading as Heading, Slot as Slot, Body as Body, Paragraph as Paragraph, Image as Image, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"0cd442d9-6e8f-458c-addc-9ea2fd327d31","name":"InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf","description":null,"projectId":"61b6ab32-9bc7-4992-b1a9-5cff4cca6deb","size":141136,"type":"font","createdAt":"2023-06-21T20:40:10.166Z","format":"ttf","meta":{"family":"Instrument Sans","variationAxes":{"wdth":{"name":"Width","min":75,"default":100,"max":100},"wght":{"name":"Weight","min":400,"default":400,"max":700}}}}]
export const pageData: PageData = {"page":{"id":"MfiDKPIb1kSYFE1qRjhYs","name":"Project","title":"Project","meta":{"description":""},"rootInstanceId":"qZSJXy4f-a_o1VrCqS1I8","path":"/project"}};
export const user: { email: string | null } | undefined = {"email":"105016275+theSamuelIyeh@users.noreply.github.com"};
export const projectId = "61b6ab32-9bc7-4992-b1a9-5cff4cca6deb";

const Page = (props: { scripts?: ReactNode }) => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="qZSJXy4f-a_o1VrCqS1I8"
data-ws-component="Body">
<Slot
data-ws-id="lsPmWD0AXoBJPFx2ooPON"
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
data-ws-id="T-m2JODJmuaT7fYGoYANC"
data-ws-component="Box">
<Box
data-ws-id="A4DNourHjbZJm-V9-5RCK"
data-ws-component="Box">
<Box
data-ws-id="dzqjCAHaPgeX4Yq69tlnL"
data-ws-component="Box">
<Heading
data-ws-id="cPQfX519jUkGxfxMoDdc0"
data-ws-component="Heading">
{"Industrial Chic: Revamping a Warehouse Space into a Stylish Loft Office"}
</Heading>
<Paragraph
data-ws-id="_BgHnLu3bUvxV1Hx3ZYlD"
data-ws-component="Paragraph">
{"Transforming a vast warehouse space into a stylish loft office to inspire creativity and promote collaboration"}
</Paragraph>
</Box>
<Box
data-ws-id="bYZWbnObPrc2eRw25mI9c"
data-ws-component="Box">
<Box
data-ws-id="5H4wW-YJA4gUUOwAwAoxz"
data-ws-component="Box">
<Text
data-ws-id="edfAnSU14UQIcnmuKCGMI"
data-ws-component="Text">
{"Client: Creative Agency Solutions"}
{""}
<br />
{""}
{"Category: Commercial"}
</Text>
<Text
data-ws-id="Skr14ZD0WFzAOG1p0or5Y"
data-ws-component="Text">
{"Release Date: April 12, 2023"}
</Text>
</Box>
<Text
data-ws-id="YewavpbofaBM-6jFiHnPk"
data-ws-component="Text">
{"Credits:"}
{""}
<br />
{""}
{"Sofa Design: Bartolomeo Carrol"}
{""}
<br />
{""}
{"Staging: Marina Norbert"}
{""}
<br />
{""}
{"Photography: Jeannie Kidist"}
</Text>
</Box>
</Box>
<Box
data-ws-id="FjxLLpFEt3n8S0FMZFNRz"
data-ws-component="Box">
<Box
data-ws-id="FsGOgWamQj6Z9bnbMjelk"
data-ws-component="Box">
<Box
data-ws-id="DRAeZXKNzwZyn5ioJCI6n"
data-ws-component="Box">
<Image
data-ws-id="ngFWoXbTmZQUkGZ9uaCvt"
data-ws-component="Image"
src={"/assets/paul-weaver-nWidMEQsnAQ-unsplash_Hd9bvJ49YlnnKKVNOBIT4.jpeg"} />
</Box>
<Box
data-ws-id="MmkQgxOHsnLbgI35hSrLD"
data-ws-component="Box">
<Box
data-ws-id="L1_vuxusNIr8XY07smDnA"
data-ws-component="Box">
<Image
data-ws-id="p9Q5iRUk5fYw-cjjT0Y4_"
data-ws-component="Image"
src={"/assets/kara-eads-L7EwHkq1B2s-unsplash_hZnqf6_CYa3hSkI38E38B.jpg"} />
</Box>
<Box
data-ws-id="mN9GBp7J8VRfKBLnCjICg"
data-ws-component="Box">
<Image
data-ws-id="flqtdC1Nbe6YzaIAI092X"
data-ws-component="Image"
src={"/assets/earl-wilcox-3xpQCOOe6hM-unsplash_2NerSMvO382JJHUQu1XdM.jpg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="UtbJvZZ3z8D-uOBxgPIwR"
data-ws-component="Box">
<Text
data-ws-id="LSGMlH13j6z9YBi6E6hRe"
data-ws-component="Text">
{"About the Project"}
</Text>
<Paragraph
data-ws-id="nY66bRzRftzrog8kPNJ56"
data-ws-component="Paragraph">
{"The design concept centered around embracing the industrial character of the space while infusing it with contemporary elements. We reimagined the raw concrete walls and exposed ductwork as design features, highlighting their inherent beauty. To enhance natural light and create an open atmosphere, large windows were installed, allowing the space to be flooded with daylight."}
</Paragraph>
</Box>
<Box
data-ws-id="EMcTlyH1rUyrkgSi_li6Q"
data-ws-component="Box">
<Box
data-ws-id="ujg3BmCsuGIRGGoxcsx-V"
data-ws-component="Box">
<Image
data-ws-id="X-V0TwtP1qFRUpsAJXkRM"
data-ws-component="Image"
src={"/assets/lakeisha-bennett-WzP3YnV9T-U-unsplash_KqsPo2JMqnCIIap7zS7Cb.jpg"} />
</Box>
<Box
data-ws-id="azv8qzwewZwFhPKPdFKWb"
data-ws-component="Box">
<Image
data-ws-id="ZcN7Vn_d3uF04RDgXmaEH"
data-ws-component="Image"
src={"/assets/spacejoy-9M66C_w_ToM-unsplash_-2-5_TNecwsjZ5uxYh0DK.jpg"} />
</Box>
<Box
data-ws-id="iGq5SA1Rjwa8ETd5yIKxO"
data-ws-component="Box">
<Image
data-ws-id="BXGsqNmb0uYlTA77wBQog"
data-ws-component="Image"
src={"/assets/toa-heftiba-FV3GConVSss-unsplash_8-PVVNvxXIt_GxAes0rKV.jpeg"} />
</Box>
</Box>
<Box
data-ws-id="xM2IK-pvFV7JGRcOtzFzG"
data-ws-component="Box">
<Text
data-ws-id="yrvLyFOUhCJpTJEty-3MY"
data-ws-component="Text">
{"The Results"}
</Text>
<Paragraph
data-ws-id="Z1n_drqZmkhdtGKhc9sKT"
data-ws-component="Paragraph">
{"Upon completion, the transformed warehouse space became a striking and functional loft office that aligned perfectly with Creative Agency Solutions' vision. The project received high praise from the client, with employees expressing enthusiasm about the inspiring environment that encouraged collaboration and innovation."}
</Paragraph>
</Box>
</Box>
</Box>
<Slot
data-ws-id="C-J0rvxj-LgSQXETCLBx5"
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
data-ws-id="D447iH2n1dn61Kb7uHCLV"
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
data-ws-id="VC7iCru-xoAUnRxwTKp0t"
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
  
