import React from "react";
import Link from "next/link";

import {
    AiOutlineCoffee,
    AiOutlineProfile,
    AiOutlineTeam,
    AiOutlineAlert,
    AiOutlineShopping,
    AiOutlineBank,
    AiOutlineNotification
} from "react-icons/ai";

import {
    SidebarContent,
    SidebarLogoContainer,
    SidebarMenuContainer,
    SidebarMenuItem,
} from "./styles";

const Sidebar = () => {
    return (
        <SidebarContent>
            <SidebarLogoContainer>
                <Link href={"/app"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="228.051" height="54.589" viewBox="0 0 228.051 54.589">
                        <g id="Group_19" data-name="Group 19" transform="translate(-355.26 -2748.142)">
                            <g id="Group_4" data-name="Group 4" transform="translate(355.26 2748.142)">
                                <path id="Path_6" data-name="Path 6" d="M360.892,2741.738l4.119,4.119a4.609,4.609,0,0,1,0,6.516l-13.033,13.034a4.609,4.609,0,0,0,0,6.517l-10.635-10.635a3.7,3.7,0,0,1,0-5.23l14.32-14.32A3.7,3.7,0,0,1,360.892,2741.738Z" transform="translate(-340.261 -2740.656)" fill="#5ac3fb" />
                                <path id="Path_7" data-name="Path 7" d="M386.92,2756.846l10.2,10.2a3.7,3.7,0,0,1,0,5.23l-14.545,14.545a3.377,3.377,0,0,0,0,4.779l-8.689-8.688a4.609,4.609,0,0,1,0-6.517l13.033-13.034A4.61,4.61,0,0,0,386.92,2756.846Z" transform="translate(-362.17 -2751.646)" fill="#3792f9" />
                                <path id="Path_8" data-name="Path 8" d="M348.285,2826.5l9.992,9.992-6.3,6.3a4.609,4.609,0,0,0,0,6.517l-10.635-10.635a3.7,3.7,0,0,1,0-5.231Z" transform="translate(-340.261 -2799.486)" fill="#7864fb" />
                                <path id="Path_9" data-name="Path 9" d="M397.234,2846.617l.009.009a3.7,3.7,0,0,1,0,4.97l-.009.009a1.428,1.428,0,0,1-.113.122l-14.32,14.32a3.7,3.7,0,0,1-5.231,0l-3.684-3.684a4.609,4.609,0,0,1,0-6.517l6.3-6.3,2.389,2.389a3.377,3.377,0,0,0,4.779,0l5.214-5.213A3.37,3.37,0,0,1,397.234,2846.617Z" transform="translate(-362.17 -2812.539)" fill="#5b3cfa" />
                                <path id="Path_10" data-name="Path 10" d="M409.3,2826.5l6.942,6.942a1.459,1.459,0,0,1,.113.122,3.37,3.37,0,0,0-4.666.1l-5.214,5.213a3.379,3.379,0,0,1-4.779-4.779Z" transform="translate(-381.289 -2799.295)" fill="#2f1dce" />
                            </g>
                            <g id="Group_5" data-name="Group 5" transform="translate(402.063 2755.627)">
                                <path id="Path_42" data-name="Path 42" d="M6.878-11.227H9.587l5.974-15.818H12.949L8.257-14.081,3.565-27.046H.88Zm15.165.314A6.137,6.137,0,0,0,28.477-17.2a6.137,6.137,0,0,0-6.434-6.289A6.137,6.137,0,0,0,15.61-17.2,6.137,6.137,0,0,0,22.044-10.913Zm0-2.128a3.949,3.949,0,0,1-4.112-4.16,3.949,3.949,0,0,1,4.112-4.16,3.949,3.949,0,0,1,4.112,4.16A3.949,3.949,0,0,1,22.044-13.041ZM30.8-11.227h2.3V-28.4H30.8Zm11.053.314A6.137,6.137,0,0,0,48.286-17.2a6.137,6.137,0,0,0-6.434-6.289A6.137,6.137,0,0,0,35.419-17.2,6.137,6.137,0,0,0,41.853-10.913Zm0-2.128a3.949,3.949,0,0,1-4.112-4.16,3.949,3.949,0,0,1,4.112-4.16,3.949,3.949,0,0,1,4.112,4.16A3.949,3.949,0,0,1,41.853-13.041ZM54.7-10.913c3,0,4.958-1.572,4.958-3.991,0-2.733-2.54-3.12-4.62-3.386-1.475-.193-2.733-.314-2.733-1.451,0-.943.871-1.669,2.395-1.669,1.451,0,2.3.677,2.37,1.6H59.34c-.048-2.056-1.814-3.676-4.668-3.676s-4.692,1.6-4.692,3.942c0,2.733,2.515,3.12,4.6,3.386,1.5.193,2.757.339,2.757,1.475,0,.943-.895,1.693-2.636,1.693-1.669,0-2.588-.7-2.636-1.693H49.738C49.81-12.509,51.7-10.913,54.7-10.913Z" transform="translate(-0.598 28.4)" fill="#201a89" />
                                <path id="Path_43" data-name="Path 43" d="M1.189-13.045h.946L1-10.913H.413ZM2.6-9.255a4.648,4.648,0,0,1,.914-2.96,3.344,3.344,0,0,1,2.764-1.19,3.814,3.814,0,0,1,1.578.308,2.947,2.947,0,0,1,1.111.845,4.378,4.378,0,0,1,.9,2.854A4.516,4.516,0,0,1,8.98-6.481a3.016,3.016,0,0,1-1.143.834,4,4,0,0,1-1.658.319A3.3,3.3,0,0,1,3.527-6.471,4.154,4.154,0,0,1,2.6-9.255Zm1.042-.133a4.167,4.167,0,0,0,.043.59,5.907,5.907,0,0,0,.1.585,4.791,4.791,0,0,0,.2.521,2.318,2.318,0,0,0,.25.484,2.187,2.187,0,0,0,1.982.967,2.3,2.3,0,0,0,1.977-.935,3.487,3.487,0,0,0,.632-2.1,4.268,4.268,0,0,0-.542-2.195,2.111,2.111,0,0,0-1.961-1.015,2.386,2.386,0,0,0-2.046.893A3.575,3.575,0,0,0,3.644-9.388Zm7.5,5.257h.522l.642-1.546a.953.953,0,0,0,.076-.348.623.623,0,0,0-.642-.642.623.623,0,0,0-.642.642.615.615,0,0,0,.424.6Zm2.24-7.053H18.2v.85H16.281v3.492q-.011.59.4.579a1.616,1.616,0,0,0,.457-.053v.845a4.142,4.142,0,0,1-.8.053,1.1,1.1,0,0,1-.542-.117.676.676,0,0,1-.314-.282,1.2,1.2,0,0,1-.143-.446A3.082,3.082,0,0,1,15.3-6.8v-3.534H13.384Zm6.064,0h.978v4.342q-.011.59.4.579a1.616,1.616,0,0,0,.457-.053v.845a4.1,4.1,0,0,1-.792.053,1.111,1.111,0,0,1-.547-.117.676.676,0,0,1-.314-.282,1.2,1.2,0,0,1-.143-.446,3.082,3.082,0,0,1-.043-.537Zm5.744,0h.983v3.051a2.532,2.532,0,0,0,.138.914,1.415,1.415,0,0,0,.372.542,1.332,1.332,0,0,0,.542.26,4.752,4.752,0,0,0,.643.112v-6.271h.978v6.271a5.259,5.259,0,0,0,.675-.112,1.333,1.333,0,0,0,.537-.26,1.238,1.238,0,0,0,.367-.542,2.835,2.835,0,0,0,.122-.914v-3.051h.978v3.343a2,2,0,0,1-.739,1.727,3.425,3.425,0,0,1-1.94.59v2.131H27.87V-5.525a3.379,3.379,0,0,1-1.913-.59,1.97,1.97,0,0,1-.765-1.727ZM37.984-6.72q-.021.468.3.457a.528.528,0,0,0,.3-.069v.84a1.188,1.188,0,0,1-.319.053q-.207.021-.345.021a.757.757,0,0,1-.6-.282.9.9,0,0,1-.239-.632h-.021a2.126,2.126,0,0,1-1.818.914,2.161,2.161,0,0,1-1.849-.888A3.29,3.29,0,0,1,32.77-8.32a3.538,3.538,0,0,1,.6-2.067,2.154,2.154,0,0,1,1.881-.9,2.082,2.082,0,0,1,1.8.925h.021v-.818h.914ZM35.4-6.2a1.308,1.308,0,0,0,.728-.2,1.57,1.57,0,0,0,.489-.5A2.713,2.713,0,0,0,37-8.309a3.155,3.155,0,0,0-.351-1.515,1.377,1.377,0,0,0-1.3-.686,1.35,1.35,0,0,0-1.217.675,2.733,2.733,0,0,0-.383,1.424,2.937,2.937,0,0,0,.383,1.493A1.371,1.371,0,0,0,35.4-6.2Zm.2-7.764h.946L35.4-11.833h-.585Zm3.454,2.748a1.974,1.974,0,0,1,.569-.074,1.053,1.053,0,0,1,1.01.627L41.89-8.389l1.663-2.8h1.1L42.421-7.4l1.6,2.774a.576.576,0,0,0,.526.383,1.1,1.1,0,0,0,.367-.058v.85a4.478,4.478,0,0,1-.563.053,1.1,1.1,0,0,1-.728-.25,2.195,2.195,0,0,1-.5-.632L41.89-6.5l-1.775,3h-1.1l2.354-3.9-1.461-2.636a.886.886,0,0,0-.229-.314.553.553,0,0,0-.367-.1,1.4,1.4,0,0,0-.266.048Zm6.3.032h1.063L48.1-6.7l1.589-4.485H50.7l-2.152,5.66h-.973Zm9.3,3.1H54.06q-.25,0-.5.021a1.255,1.255,0,0,0-.446.117.7.7,0,0,0-.314.287.811.811,0,0,0-.143.5.766.766,0,0,0,.133.457.958.958,0,0,0,.314.292,1.86,1.86,0,0,0,.9.207,2.072,2.072,0,0,0,1.047-.25,1.129,1.129,0,0,0,.5-.872h.914A1.732,1.732,0,0,1,55.729-5.9a2.69,2.69,0,0,1-1.578.478,5.047,5.047,0,0,1-.872-.074,2.884,2.884,0,0,1-.8-.26,1.591,1.591,0,0,1-.574-.531,1.585,1.585,0,0,1-.229-.882,1.171,1.171,0,0,1,.377-.882,1.587,1.587,0,0,1,.818-.446v-.021a1.847,1.847,0,0,1-.728-.468,1.06,1.06,0,0,1-.292-.776,1.228,1.228,0,0,1,.2-.707,1.367,1.367,0,0,1,.5-.468,2.847,2.847,0,0,1,1.382-.356,3.167,3.167,0,0,1,1.589.377,1.614,1.614,0,0,1,.717,1.382h-.914a.819.819,0,0,0-.436-.781,2.176,2.176,0,0,0-.925-.2,1.718,1.718,0,0,0-.749.165.693.693,0,0,0-.393.664.68.68,0,0,0,.393.664,1.9,1.9,0,0,0,.813.149h.6Zm2.774-3.1h4.815v.85H60.31v3.492q-.011.59.4.579a1.616,1.616,0,0,0,.457-.053v.845a4.142,4.142,0,0,1-.8.053,1.1,1.1,0,0,1-.542-.117.676.676,0,0,1-.314-.282,1.2,1.2,0,0,1-.143-.446,3.082,3.082,0,0,1-.043-.537v-3.534H57.414Zm8.721,3.1h-.579q-.25,0-.5.021a1.255,1.255,0,0,0-.446.117.7.7,0,0,0-.314.287.811.811,0,0,0-.143.5.766.766,0,0,0,.133.457.958.958,0,0,0,.314.292,1.86,1.86,0,0,0,.9.207,2.072,2.072,0,0,0,1.047-.25,1.129,1.129,0,0,0,.5-.872h.914A1.732,1.732,0,0,1,67.224-5.9a2.69,2.69,0,0,1-1.578.478,5.047,5.047,0,0,1-.872-.074,2.884,2.884,0,0,1-.8-.26,1.591,1.591,0,0,1-.574-.531,1.585,1.585,0,0,1-.229-.882,1.171,1.171,0,0,1,.377-.882A1.587,1.587,0,0,1,64.37-8.5v-.021a1.847,1.847,0,0,1-.728-.468,1.06,1.06,0,0,1-.292-.776,1.228,1.228,0,0,1,.2-.707,1.367,1.367,0,0,1,.5-.468,2.847,2.847,0,0,1,1.382-.356,3.167,3.167,0,0,1,1.589.377,1.614,1.614,0,0,1,.717,1.382h-.914a.819.819,0,0,0-.436-.781,2.176,2.176,0,0,0-.925-.2,1.718,1.718,0,0,0-.749.165.693.693,0,0,0-.393.664.68.68,0,0,0,.393.664,1.9,1.9,0,0,0,.813.149h.6Zm3.19,3.949h.522l.642-1.546a.953.953,0,0,0,.076-.348.623.623,0,0,0-.642-.642.623.623,0,0,0-.642.642.615.615,0,0,0,.424.6Zm8.414-3.949H77.16q-.25,0-.5.021a1.255,1.255,0,0,0-.446.117.7.7,0,0,0-.314.287.811.811,0,0,0-.143.5.766.766,0,0,0,.133.457.958.958,0,0,0,.314.292,1.86,1.86,0,0,0,.9.207,2.072,2.072,0,0,0,1.047-.25,1.129,1.129,0,0,0,.5-.872h.914A1.732,1.732,0,0,1,78.828-5.9a2.69,2.69,0,0,1-1.578.478,5.047,5.047,0,0,1-.872-.074,2.884,2.884,0,0,1-.8-.26,1.591,1.591,0,0,1-.574-.531,1.585,1.585,0,0,1-.229-.882,1.171,1.171,0,0,1,.377-.882,1.587,1.587,0,0,1,.818-.446v-.021a1.847,1.847,0,0,1-.728-.468,1.06,1.06,0,0,1-.292-.776,1.228,1.228,0,0,1,.2-.707,1.367,1.367,0,0,1,.5-.468,2.847,2.847,0,0,1,1.382-.356,3.167,3.167,0,0,1,1.589.377,1.614,1.614,0,0,1,.717,1.382h-.914A.819.819,0,0,0,78-10.313a2.176,2.176,0,0,0-.925-.2,1.718,1.718,0,0,0-.749.165.693.693,0,0,0-.393.664.68.68,0,0,0,.393.664,1.9,1.9,0,0,0,.813.149h.6Zm8.131.425q-.011,2.237-2.338,2.237-2.344,0-2.354-2.237v-3.529h.983v3.343a1.981,1.981,0,0,0,.292,1.206,1.206,1.206,0,0,0,1.079.436,1.213,1.213,0,0,0,1.084-.436,2.064,2.064,0,0,0,.276-1.206v-3.343h.978Zm-2.434-6.2h.946l-1.137,2.131H82.66Zm4.347,2.673h.978v2.328l2.4-2.328h1.371L90.276-9.117,92.7-5.525H91.5L89.569-8.432l-.808.686v2.221h-.978Zm8.439-.106a2.626,2.626,0,0,1,2,.824,2.885,2.885,0,0,1,.744,2,3.309,3.309,0,0,1-.686,2.179,2.566,2.566,0,0,1-2.057.866,2.485,2.485,0,0,1-2.046-.888,3.328,3.328,0,0,1-.686-2.158A2.867,2.867,0,0,1,94.24-10.5,2.61,2.61,0,0,1,96.223-11.291Zm1.7,2.95A2.94,2.94,0,0,0,97.546-9.8a1.435,1.435,0,0,0-1.323-.707,1.432,1.432,0,0,0-1.307.675,2.769,2.769,0,0,0-.383,1.493,2.406,2.406,0,0,0,.457,1.509,1.443,1.443,0,0,0,1.233.632,1.442,1.442,0,0,0,1.291-.664A2.685,2.685,0,0,0,97.918-8.341Zm2.668-5.006a2.129,2.129,0,0,1,.542-.058,1.1,1.1,0,0,1,.829.287,2.862,2.862,0,0,1,.51.946l2.195,5.421a2.043,2.043,0,0,0,.186.3.348.348,0,0,0,.287.143h.271v.781h-.558a1.077,1.077,0,0,1-1.074-.808l-1.329-3.5L100.8-5.525H99.746L101.978-11l-.393-1.047q-.207-.531-.654-.51h-.345ZM111.295-6.72q-.021.468.3.457a.528.528,0,0,0,.3-.069v.84a1.188,1.188,0,0,1-.319.053q-.207.021-.345.021a.757.757,0,0,1-.6-.282.9.9,0,0,1-.239-.632h-.021a2.126,2.126,0,0,1-1.818.914,2.161,2.161,0,0,1-1.849-.888,3.29,3.29,0,0,1-.622-2.014,3.538,3.538,0,0,1,.6-2.067,2.154,2.154,0,0,1,1.881-.9,2.082,2.082,0,0,1,1.8.925h.021v-.818h.914Zm-2.588.521a1.308,1.308,0,0,0,.728-.2,1.57,1.57,0,0,0,.489-.5,2.713,2.713,0,0,0,.383-1.414,3.155,3.155,0,0,0-.351-1.515,1.377,1.377,0,0,0-1.3-.686,1.35,1.35,0,0,0-1.217.675,2.733,2.733,0,0,0-.383,1.424,2.937,2.937,0,0,0,.383,1.493A1.371,1.371,0,0,0,108.707-6.2Zm7.375-4.985h.978v2.328l2.4-2.328h1.371l-2.253,2.067L121-5.525h-1.2l-1.934-2.907-.808.686v2.221h-.978Zm10.81,4.464q-.021.468.3.457a.528.528,0,0,0,.3-.069v.84a1.188,1.188,0,0,1-.319.053q-.207.021-.345.021a.757.757,0,0,1-.6-.282.9.9,0,0,1-.239-.632h-.021a2.126,2.126,0,0,1-1.818.914,2.161,2.161,0,0,1-1.849-.888,3.29,3.29,0,0,1-.622-2.014,3.538,3.538,0,0,1,.6-2.067,2.154,2.154,0,0,1,1.881-.9,2.082,2.082,0,0,1,1.8.925h.021v-.818h.914ZM124.3-6.2a1.308,1.308,0,0,0,.728-.2,1.57,1.57,0,0,0,.489-.5,2.713,2.713,0,0,0,.383-1.414,3.155,3.155,0,0,0-.351-1.515,1.377,1.377,0,0,0-1.3-.686,1.35,1.35,0,0,0-1.217.675,2.733,2.733,0,0,0-.383,1.424,2.937,2.937,0,0,0,.383,1.493A1.371,1.371,0,0,0,124.3-6.2Zm4.48-4.985h.978v4.342q-.011.59.4.579a1.616,1.616,0,0,0,.457-.053v.845a4.1,4.1,0,0,1-.792.053,1.111,1.111,0,0,1-.547-.117.676.676,0,0,1-.314-.282,1.2,1.2,0,0,1-.143-.446,3.083,3.083,0,0,1-.043-.537Zm7.63,5.277L134.756-9.68a3.905,3.905,0,0,0-.282-.611.354.354,0,0,0-.292-.154,1.193,1.193,0,0,0-.319.037V-11.2a1.16,1.16,0,0,1,.436-.1,1.141,1.141,0,0,1,.808.239.988.988,0,0,1,.229.292q.1.2.2.457L136.9-7.018l1.674-4.167H139.6l-2.211,5.277v2.514h-.978Zm6.888-.356a1.336,1.336,0,0,0,1.265-.675,2.9,2.9,0,0,0,.335-1.451,2.861,2.861,0,0,0-.345-1.414,1.2,1.2,0,0,0-.489-.468,1.528,1.528,0,0,0-.765-.175,1.363,1.363,0,0,0-1.238.643,2.629,2.629,0,0,0-.361,1.414,2.8,2.8,0,0,0,.351,1.451A1.314,1.314,0,0,0,143.3-6.263ZM140.724-8.3q.011-2.96,2.578-2.992a2.355,2.355,0,0,1,1.929.824,3.241,3.241,0,0,1,.654,2.1,3.378,3.378,0,0,1-.632,2.057,2.3,2.3,0,0,1-1.95.888,2.2,2.2,0,0,1-.893-.191,1.508,1.508,0,0,1-.686-.611H141.7v2.827h-.978Zm6.723-1.515q.021-.632-.356-.632a1.31,1.31,0,0,0-.308.037v-.776a1.426,1.426,0,0,1,.6-.106q.946-.011.946,1.01h.021a2.122,2.122,0,0,1,1.9-1.01,1.674,1.674,0,0,1,1.892,1.871v6.027h-.978V-9.16q.021-1.249-1.143-1.286a1.421,1.421,0,0,0-1.212.537,2.246,2.246,0,0,0-.377,1.35v3.035h-.983Zm1.929-4.161h.946l-1.137,2.131H148.6Zm6.388,8.067L154.106-9.68a3.905,3.905,0,0,0-.282-.611.354.354,0,0,0-.292-.154,1.193,1.193,0,0,0-.319.037V-11.2a1.16,1.16,0,0,1,.436-.1,1.141,1.141,0,0,1,.808.239.988.988,0,0,1,.229.292q.1.2.2.457l1.371,3.284,1.674-4.167h1.026l-2.211,5.277v2.514h-.978Zm6.728-5.384a2.626,2.626,0,0,1,2,.824,2.885,2.885,0,0,1,.744,2,3.309,3.309,0,0,1-.686,2.179,2.566,2.566,0,0,1-2.057.866,2.485,2.485,0,0,1-2.046-.888,3.328,3.328,0,0,1-.686-2.158,2.867,2.867,0,0,1,.749-2.035A2.61,2.61,0,0,1,162.492-11.291Zm1.7,2.95a2.94,2.94,0,0,0-.372-1.461,1.435,1.435,0,0,0-1.323-.707,1.432,1.432,0,0,0-1.307.675,2.77,2.77,0,0,0-.383,1.493,2.406,2.406,0,0,0,.457,1.509,1.443,1.443,0,0,0,1.233.632,1.442,1.442,0,0,0,1.291-.664A2.685,2.685,0,0,0,164.187-8.341ZM169.3-6.263a1.336,1.336,0,0,0,1.265-.675,2.9,2.9,0,0,0,.335-1.451,2.862,2.862,0,0,0-.345-1.414,1.2,1.2,0,0,0-.489-.468,1.528,1.528,0,0,0-.765-.175,1.363,1.363,0,0,0-1.238.643,2.629,2.629,0,0,0-.361,1.414,2.8,2.8,0,0,0,.351,1.451A1.314,1.314,0,0,0,169.3-6.263ZM166.722-8.3q.011-2.96,2.578-2.992a2.355,2.355,0,0,1,1.929.824,3.241,3.241,0,0,1,.654,2.1,3.378,3.378,0,0,1-.632,2.057,2.3,2.3,0,0,1-1.95.888,2.2,2.2,0,0,1-.893-.191,1.508,1.508,0,0,1-.686-.611H167.7v2.827h-.978ZM178.159-6.72q-.021.468.3.457a.528.528,0,0,0,.3-.069v.84a1.189,1.189,0,0,1-.319.053q-.207.021-.345.021a.757.757,0,0,1-.6-.282.9.9,0,0,1-.239-.632h-.021a2.126,2.126,0,0,1-1.818.914,2.161,2.161,0,0,1-1.849-.888,3.29,3.29,0,0,1-.622-2.014,3.538,3.538,0,0,1,.6-2.067,2.154,2.154,0,0,1,1.881-.9,2.082,2.082,0,0,1,1.8.925h.021v-.818h.914Zm-2.588.521a1.308,1.308,0,0,0,.728-.2,1.57,1.57,0,0,0,.489-.5,2.713,2.713,0,0,0,.383-1.414,3.155,3.155,0,0,0-.351-1.515,1.377,1.377,0,0,0-1.3-.686,1.35,1.35,0,0,0-1.217.675,2.733,2.733,0,0,0-.383,1.424,2.937,2.937,0,0,0,.383,1.493A1.371,1.371,0,0,0,175.571-6.2Zm4.613.08a.7.7,0,0,1,.218-.516.711.711,0,0,1,.521-.218.711.711,0,0,1,.521.218.711.711,0,0,1,.218.521.717.717,0,0,1-.218.526.708.708,0,0,1-.521.213.715.715,0,0,1-.526-.213A.721.721,0,0,1,180.184-6.12Zm.138-1.233V-13.73h1.2v6.377Z" transform="translate(-0.413 43.012)" fill="#868686" />
                                <path id="Path_41" data-name="Path 41" d="M6.878,26.658H9.587L15.561,10.84H12.949L8.257,23.8,3.565,10.84H.88Zm15.165.314a6.137,6.137,0,0,0,6.434-6.289A6.137,6.137,0,0,0,22.044,14.4a6.137,6.137,0,0,0-6.434,6.289A6.137,6.137,0,0,0,22.044,26.973Zm0-2.128a3.949,3.949,0,0,1-4.112-4.16,3.949,3.949,0,0,1,4.112-4.16,3.949,3.949,0,0,1,4.112,4.16A3.949,3.949,0,0,1,22.044,24.844Zm14.174,7.232c3.314,0,5.95-1.669,5.95-5.829V14.71h-2.3v6.119c0,2.54-1.475,3.894-3.6,3.894-2.177,0-3.6-1.306-3.6-3.894V14.71h-2.3v6.119c0,4.184,2.54,6.047,5.515,6.047a4.267,4.267,0,0,0,3.991-2.3V26.3c0,2.709-1.427,3.773-3.652,3.773a3.343,3.343,0,0,1-3.459-1.983h-2.3C31.162,30.794,33.46,32.076,36.217,32.076Zm14.294-5.1a4.763,4.763,0,0,0,4.644-2.927v2.612h2.1V20.781A6.062,6.062,0,0,0,50.9,14.4a6.153,6.153,0,0,0-6.458,6.385A5.95,5.95,0,0,0,50.512,26.973Zm.363-2.128a3.949,3.949,0,0,1-4.112-4.16,4.112,4.112,0,1,1,8.224,0A3.949,3.949,0,0,1,50.874,24.844Zm14.754,7.232c3.531,0,6.337-1.79,6.337-6.385v-4.91A6.056,6.056,0,0,0,65.58,14.4a6.137,6.137,0,0,0-6.434,6.289,5.874,5.874,0,0,0,6.047,6.192,4.908,4.908,0,0,0,4.5-2.467v1.379c0,3.12-1.621,4.281-4.063,4.281-1.741,0-3.144-.6-3.7-1.983H59.582C60.4,30.843,62.7,32.076,65.628,32.076Zm-.048-7.353a3.853,3.853,0,0,1-4.112-4.039,4.112,4.112,0,1,1,8.224,0A3.853,3.853,0,0,1,65.58,24.723Zm14.706,2.249a6.085,6.085,0,0,0,5.877-3.652h-2.54a3.687,3.687,0,0,1-3.338,1.524,3.8,3.8,0,0,1-4.015-3.314h10.4v-.847a6.411,6.411,0,0,0-12.819,0A6.137,6.137,0,0,0,80.286,26.973Zm-3.942-7.5a3.789,3.789,0,0,1,3.942-2.951,3.828,3.828,0,0,1,3.967,2.951Z" transform="translate(61.397 -9.631)" fill="#3792f9" />
                            </g>
                        </g>
                    </svg>
                </Link>
            </SidebarLogoContainer>

            <SidebarMenuContainer>
                <SidebarMenuItem>
                    <Link href={"/app/listings"}>
                        <AiOutlineProfile size={18} /> Αγγελίες
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href={"/app/"}>
                        <AiOutlineCoffee size={18} />
                        Καταστήματα εστίασης
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href={"/app/"}>
                        <AiOutlineNotification size={18} />
                        Εκδηλώσεις
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href={"/app/listings"}>
                        <AiOutlineTeam size={18} />
                        Τοπικοί Επαγγελματίες
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href={"/app/listings"}>
                        <AiOutlineAlert size={18} />
                        Ξενοδοχεία
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href={"/app/listings"}>
                        <AiOutlineShopping size={18} />
                        Καταστήματα εμπορίου
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href={"/app/listings"}>
                        <AiOutlineBank size={18} />
                        Μουσεία
                    </Link>
                </SidebarMenuItem>
            </SidebarMenuContainer>
        </SidebarContent>
    );
};

export default Sidebar;
