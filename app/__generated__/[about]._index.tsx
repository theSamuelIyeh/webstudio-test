/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset } from "@webstudio-is/sdk";
import { Box as Box, Fragment as Fragment, Text as Text, Heading as Heading, Slot as Slot, Body as Body, Paragraph as Paragraph, Separator as Separator, Image as Image, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"0cd442d9-6e8f-458c-addc-9ea2fd327d31","name":"InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf","description":null,"projectId":"61b6ab32-9bc7-4992-b1a9-5cff4cca6deb","size":141136,"type":"font","createdAt":"2023-06-21T20:40:10.166Z","format":"ttf","meta":{"family":"Instrument Sans","variationAxes":{"wdth":{"name":"Width","min":75,"default":100,"max":100},"wght":{"name":"Weight","min":400,"default":400,"max":700}}}}]
export const pageData: PageData = {"page":{"id":"niHnrglmkOe1O8hxkHqu1","name":"About","title":"About","meta":{"description":""},"rootInstanceId":"1RevfaoBjtW3gSyasuhYt","path":"/about"}};
export const user: { email: string | null } | undefined = {"email":"105016275+theSamuelIyeh@users.noreply.github.com"};
export const projectId = "61b6ab32-9bc7-4992-b1a9-5cff4cca6deb";

const Page = (props: { scripts?: ReactNode }) => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="1RevfaoBjtW3gSyasuhYt"
data-ws-component="Body">
<Slot
data-ws-id="mSF5XOV_Tt3D5ohkFAA_6"
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
data-ws-id="4fCn1YUTV9JDpnGxlOR7Y"
data-ws-component="Box">
<Box
data-ws-id="C1tA_6jVHf2T2pjeEUNCD"
data-ws-component="Box">
<Heading
data-ws-id="XTE_G_Db_QyxqFMpDOjck"
data-ws-component="Heading">
<Text
data-ws-id="FdCGfIXDbAeHDgRxzHjbu"
data-ws-component="Text">
{"I'm Sam, an"}
</Text>
<Text
data-ws-id="cTq2fIGJJz5H51UZUGJdq"
data-ws-component="Text">
{"Interior Designer"}
</Text>
<Text
data-ws-id="BSttSGacJAdlZ-SMXyeob"
data-ws-component="Text">
{"From Los Angeles"}
</Text>
</Heading>
<Box
data-ws-id="fQw0qfKebDTpNsWeylwTv"
data-ws-component="Box">
<Box
data-ws-id="-JgKYWAEksemz5k1LGD63"
data-ws-component="Box">
<Slot
data-ws-id="7cHPK3tVo0K9YTH_1U7R1"
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
</Box>
</Box>
<Box
data-ws-id="jxzKDHecnkseb9UA7hy7t"
data-ws-component="Box">
<Image
data-ws-id="MiH3wmq9Ur3cJjaw05WvY"
data-ws-component="Image"
src={"/assets/austin-wade-98RLHBWGswE-unsplash_aAazBi9fRwzaFviNmWLUu.jpg"} />
</Box>
</Box>
<Box
data-ws-id="okfaOwGRTu8Rd-E-nL5kP"
data-ws-component="Box">
<Box
data-ws-id="c9DHLJJeUsYg9GxkJY8oi"
data-ws-component="Box">
<Box
data-ws-id="lHtR4_Zh3tpZDBE4g4amg"
data-ws-component="Box">
<Box
data-ws-id="PTUnWrFqqUXJznoY0Wg1C"
data-ws-component="Box">
<Box
data-ws-id="vLzIeijcbx3UoIDP-6dci"
data-ws-component="Box">
<Box
data-ws-id="AoiSVtDHYp4llzrML2o0j"
data-ws-component="Box">
<Image
data-ws-id="PriyJWBAnpHcEs7AqQA5r"
data-ws-component="Image"
src={"/assets/austin-wade-X6Uj51n5CE8-unsplash_59qxcdMMHV3PiWJ1NzE2f.jpg"} />
</Box>
<Heading
data-ws-id="kL8deucas-TLX6SX4J0gP"
data-ws-component="Heading">
{"Hi There!"}
</Heading>
</Box>
<Paragraph
data-ws-id="-sUcKXHkBTY87vxrtWvIx"
data-ws-component="Paragraph">
{"I'm Sam, an interior designer based in sunny LA. I transform spaces into functional masterpieces, always seeking inspiration from the vibrant art scene. Collaboration is key—I work closely with clients, architects, and contractors. Whether hiking or cooking, I believe in creating inspiring, functional spaces. If you want a passionate, detail-oriented designer who knows how to have fun, let's collaborate and create something extraordinary!"}
</Paragraph>
<Slot
data-ws-id="A9Gq3JomncI1J8USfNRq0"
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
data-ws-id="SGTTnGe9_dtTPTfAmi2Xo"
data-ws-component="Box">
<Image
data-ws-id="htRzrBPOM6unNxb3DSrlf"
data-ws-component="Image"
src={"/assets/austin-wade-X6Uj51n5CE8-unsplash_59qxcdMMHV3PiWJ1NzE2f.jpg"} />
</Box>
</Box>
<Separator
data-ws-id="ezjvI24tVzA1dnWT5fvLw"
data-ws-component="Separator" />
<Box
data-ws-id="PZ7guK8dCAOpz8V6YKYmg"
data-ws-component="Box">
<Heading
data-ws-id="5slZRmrEe1FX1-Lj_ZyrZ"
data-ws-component="Heading">
{"Recent Experience"}
</Heading>
<Box
data-ws-id="V5OQOyQlCYoHQe_QJVIgJ"
data-ws-component="Box">
<Box
data-ws-id="mEDCOtByd8Ef2AaAdeV2l"
data-ws-component="Box">
<Box
data-ws-id="q4Y4-mc2NIy8feAWbRbD_"
data-ws-component="Box">
<Text
data-ws-id="kr5gLxUVuNY7ehkyAjfKB"
data-ws-component="Text">
{"Sr Interior Designer"}
</Text>
<Box
data-ws-id="THW0Axzk2nudhD1UPoSmk"
data-ws-component="Box">
<Box
data-ws-id="aAnBAFX7msZmgxo_qWS28"
data-ws-component="Box">
<Text
data-ws-id="uazigOIsbxLyZLAb1OG2Y"
data-ws-component="Text">
{"ABC Design Studio"}
</Text>
<Text
data-ws-id="Bt3bAvrNmea9zXaqIOWDw"
data-ws-component="Text">
{"Los Angeles, California"}
</Text>
</Box>
<Box
data-ws-id="RdYJPIvZRWk49SbAe6t5D"
data-ws-component="Box">
<Text
data-ws-id="jqS6X-2EzjjZ5EcL8Y6ti"
data-ws-component="Text">
{"2021"}
</Text>
<Separator
data-ws-id="2uGMS2OLx-I9aqrLT-717"
data-ws-component="Separator" />
<Text
data-ws-id="-VNZwiRCrNZj2w7Xl4dRQ"
data-ws-component="Text">
{"Present"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="we-1OJWpIvnPZQgrZkuy3"
data-ws-component="Paragraph">
{"Collaborating closely with clients, I translate their vision into comprehensive design concepts, encompassing space planning, furniture layouts, and color schemes."}
</Paragraph>
</Box>
<Box
data-ws-id="EQ_KSg9FzoO7dbUsiH4jN"
data-ws-component="Box">
<Box
data-ws-id="y3lM3RR5rgrgAhcXDjAvP"
data-ws-component="Box">
<Text
data-ws-id="3s7Ysuoorm2yVrZ69N32V"
data-ws-component="Text">
{"Interior Designer"}
</Text>
<Box
data-ws-id="07jP6DOxrRQIilTsYDsIy"
data-ws-component="Box">
<Box
data-ws-id="316D3yfaOAO5nLAi_bu0E"
data-ws-component="Box">
<Text
data-ws-id="KAjL0lkpuneJHY44XlEXg"
data-ws-component="Text">
{"DEF Design Studio"}
</Text>
<Text
data-ws-id="T6q62uX3bhDlOpDQREl2g"
data-ws-component="Text">
{"Los Angeles, California"}
</Text>
</Box>
<Box
data-ws-id="BMUMK0ljWCHVMw0xN7ex6"
data-ws-component="Box">
<Text
data-ws-id="TiLuDK7f1oUJutPlWA5qc"
data-ws-component="Text">
{"2018"}
</Text>
<Separator
data-ws-id="M-9fHD1nt23rDh2_GxjqB"
data-ws-component="Separator" />
<Text
data-ws-id="NnNLrBd8CxNkAI0KazHvK"
data-ws-component="Text">
{"2021"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="sVXCPjpgBM3xFgqlhZP_J"
data-ws-component="Paragraph">
{"I sourced and selected furniture, fixtures, materials, and finishes that align with design objectives and budget. Coordinating with contractors, architects, and vendors, I ensured seamless project execution."}
</Paragraph>
</Box>
<Box
data-ws-id="DMfWzA2z1fopZke3T9S9X"
data-ws-component="Box">
<Box
data-ws-id="txl72lpKFLXzMc1tFUJXe"
data-ws-component="Box">
<Text
data-ws-id="FiSPtiHtEyhuLjLdMKZn8"
data-ws-component="Text">
{"Jr Interior Designer"}
</Text>
<Box
data-ws-id="bJv_M6ahHF4qt8m3JLky7"
data-ws-component="Box">
<Box
data-ws-id="sQyT7gYb1mV4S7g_ndgAg"
data-ws-component="Box">
<Text
data-ws-id="etCU3S96NzKQ8b9Ws-4vb"
data-ws-component="Text">
{"GHI Design Studio"}
</Text>
<Text
data-ws-id="4OpuRHtLtmx_02BlERYuB"
data-ws-component="Text">
{"Los Angeles, California"}
</Text>
</Box>
<Box
data-ws-id="9zkjYJoyVyUHN9hjc1VuZ"
data-ws-component="Box">
<Text
data-ws-id="Fs9gJSnmfQOLtHZoOhw-W"
data-ws-component="Text">
{"2014"}
</Text>
<Separator
data-ws-id="DLc7K8RCGu_fYYByCGqc0"
data-ws-component="Separator" />
<Text
data-ws-id="1R181-23h4qk7epOjy-Iu"
data-ws-component="Text">
{"2018"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="vrlKJBElmhGzw5xyrPlZ8"
data-ws-component="Paragraph">
{" I collaborated closely with senior designers, assisting in developing design concepts, creating mood boards, and preparing presentations for client meetings."}
</Paragraph>
</Box>
</Box>
</Box>
<Separator
data-ws-id="2NT1sSGuDbP6uti9PsKbT"
data-ws-component="Separator" />
<Box
data-ws-id="oq1xGW4EKAnf06E7rQdMa"
data-ws-component="Box">
<Heading
data-ws-id="tDwKaH9VAAK4-3ygnKGXH"
data-ws-component="Heading">
{"Testimonials"}
</Heading>
<Slot
data-ws-id="UaEKGB9n68OcxMIoo_323"
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
<Box
data-ws-id="yEzbEqUfFR8wFAXOg8Pg8"
data-ws-component="Box">
<Box
data-ws-id="Vy-fvayT3fiI_CLaxy1B6"
data-ws-component="Box">
<Box
data-ws-id="hsUlkt9Ih53RpUGMlS2qm"
data-ws-component="Box">
<Box
data-ws-id="IbUJCt53ivVVshvzhaan5"
data-ws-component="Box">
<Image
data-ws-id="DkqqpulGcbyWftsxaxwrF"
data-ws-component="Image"
src={"/assets/leilani-angel-K84vnnzxmTQ-unsplash_2GrD75_kxkAU-s50UEiSv.jpeg"} />
</Box>
<Box
data-ws-id="N3jPj51gA0j1ik73w5cua"
data-ws-component="Box">
<Text
data-ws-id="HeUDWTw0PPd9ZEPxku-vU"
data-ws-component="Text">
{"Benjamin Clarke"}
</Text>
<Box
data-ws-id="_dlapCk60Xph7bTdCHOMy"
data-ws-component="Box">
<Text
data-ws-id="8jv3rymzFiqR27xxsxV2X"
data-ws-component="Text">
{"Project Lead"}
</Text>
<Text
data-ws-id="l4_4uO1kyfWD87aG8gTlJ"
data-ws-component="Text">
{"DEF Design Studio"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="F69_lntoUIxojGUvf462z"
data-ws-component="Paragraph">
{"Sam's technical proficiency in design software, such as AutoCAD and SketchUp, played a pivotal role in the team."}
</Paragraph>
</Box>
<Box
data-ws-id="KSxWiSfZxPJQ4IBLY73Fo"
data-ws-component="Box">
<Box
data-ws-id="YVYh6tg5jdqM_q2V0dUgQ"
data-ws-component="Box">
<Box
data-ws-id="jsYgAZVq39jVi9PwqzcRl"
data-ws-component="Box">
<Image
data-ws-id="w7EZ412ZrKazgK2I6kAUp"
data-ws-component="Image"
src={"/assets/edward-cisneros-_H6wpor9mjs-unsplash_RNG4L2NQc3d4qMDVpLDgh.jpeg"} />
</Box>
<Box
data-ws-id="RJAsq-gKg6sTdk7-OumKW"
data-ws-component="Box">
<Text
data-ws-id="ckMgm7qzrcq1Zw3Y2RgX0"
data-ws-component="Text">
{"Ava Anderson"}
</Text>
<Box
data-ws-id="29G4fNQG3pHwtc4a7uJhk"
data-ws-component="Box">
<Text
data-ws-id="Ct2zKOoo6Idl3NtNbPcHS"
data-ws-component="Text">
{"Creative Director"}
</Text>
<Text
data-ws-id="8RjL46nE1EwhGGtAHZtQU"
data-ws-component="Text">
{"GHI Design Studio"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="7pP1mBM480dG2VqRkTLoI"
data-ws-component="Paragraph">
{"Throughout their tenure at our firm, Sam showcased exceptional design skills and a keen eye for detail."}
</Paragraph>
</Box>
<Box
data-ws-id="Z4xHe69oUofidmLTiPtna"
data-ws-component="Box">
<Box
data-ws-id="gAs4pTyH4gWU2WeiqbAmn"
data-ws-component="Box">
<Box
data-ws-id="T06B8trngh8J1t_vPhXBw"
data-ws-component="Box">
<Image
data-ws-id="yHU2SqLUsT22v3P4OHq_C"
data-ws-component="Image"
src={"/assets/charlesdeluvio-K4mSJ7kc0As-unsplash_5O1nxK3_r99x4YBa4bM_F.jpeg"} />
</Box>
<Box
data-ws-id="Y2uRcj8Kv9bEi6RybwGQH"
data-ws-component="Box">
<Text
data-ws-id="D3CuAlWyAvFpuoUMe5TXY"
data-ws-component="Text">
{"Leonard Cohen"}
</Text>
<Box
data-ws-id="y534Icjj2UQRK_0Oiu44_"
data-ws-component="Box">
<Text
data-ws-id="P7V-dCS-O8A4vsn1aJMrw"
data-ws-component="Text">
{"Chief Happiness Officer"}
</Text>
<Text
data-ws-id="UimJZ41oB_KFy8P2yTFO8"
data-ws-component="Text">
{"GHI Design Studio"}
</Text>
</Box>
</Box>
</Box>
<Paragraph
data-ws-id="zQGtewi6_WOAqLTM3eXot"
data-ws-component="Paragraph">
{"Their expertise, professionalism, and genuine passion for their craft make them an invaluable asset to any design team."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="zTu4DKyQeJGOTi-HsShup"
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
data-ws-id="G9wZNDkyKO3fnzBgMj-Yy"
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
data-ws-id="VK6mnHtuGc2OpFg7dZPVJ"
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
  
