import React, { useState, useEffect, useRef } from 'react';
import './home.css'
import Uploder from './Upload';
import axios from 'axios'
const HomeComponents = () => {
    const [file, setFile] = useState()
    const [image, setImage] = useState([])
    const [imageResponse, setImageRe] = useState()
    const UploadImage = async () => {
        console.log(file);
        axios.post('http://127.0.0.1:8000/upload', file)

    }
    const DownloadClick = async () => {
        axios.get(`http://127.0.0.1:8000/download`, { responseType: 'blob' })
            .then((response) => {
                const disposition = response.headers['content-disposition'];
                const match = disposition && disposition.match(/filename="(.+)"/);
                const filename = match && match[1] ? match[1] : 'your_file.pptx';
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
              
                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                console.error('Download failed:', error);
            });
    }
    return (
        <>
            <div className="header">
                <div className="header__main">
                    <div className="brand">
                        <div className="brand__logo">
                            <a href="/"
                                title="iLovePDF">
                                <img src="https://www.ilovepdf.com/img/ilovepdf.svg" alt="iLovePDF" />
                            </a>
                        </div>
                    </div>        <div className="header__nav">
                        <div className="main-menu" id="menuBig">
                            <ul className="nav">
                                <li><a href="/merge_pdf">Merge PDF</a></li>
                                <li><a href="/split_pdf">Split PDF</a></li>
                                <li><a href="/compress_pdf">Compress PDF</a></li>
                                <li className="dropdown  dropdown-full">
                                    <span className="nav__item--active" >Convert PDF<i className="ico ico--down"></i></span>
                                    <ul className="dropdown-menu mega menu-full menu-full--convert">
                                        <li>
                                            <ul>
                                                <li><div>Convert to PDF</div></li>
                                                <li><a className="nav__item--active" href="/jpg_to_pdf"><i className="ico ico--jpgpdf"></i>JPG to PDF</a></li>
                                                <li><a href="/word_to_pdf"><i className="ico ico--wordpdf"></i>WORD to PDF</a></li>
                                                <li><a href="/powerpoint_to_pdf"><i className="ico ico--powerpointpdf"></i>POWERPOINT to PDF</a></li>
                                                <li><a href="/excel_to_pdf"><i className="ico ico--excelpdf"></i>EXCEL to PDF</a></li>
                                                <li><a href="/html-to-pdf"><i className="ico ico--htmlpdf"></i> HTML to PDF</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><div>Convert from PDF</div></li>
                                                <li><a href="/pdf_to_jpg"><i className="ico ico--pdfjpg"></i> PDF to JPG</a></li>
                                                <li><a href="/pdf_to_word"><i className="ico ico--pdfword"></i> PDF to WORD</a></li>
                                                <li><a href="/pdf_to_powerpoint"><i className="ico ico--pdfpowerpoint"></i> PDF to POWERPOINT</a></li>
                                                <li><a href="/pdf_to_excel"><i className="ico ico--pdfexcel"></i> PDF to EXCEL</a></li>
                                                <li><a href="/convert-pdf-to-pdfa"><i className="ico ico--pdfa"></i> PDF to PDF/A</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li className="dropdown dropdown-full" id="menuSmall">
                                    <span >All PDF tools<i className="ico ico--down"></i></span>
                                    <span className="nav__icon"><i className="ico ico--tools"></i></span>
                                    <ul className="dropdown-menu mega menu-full">
                                        <li>
                                            <ul>
                                                <li><div>Organize PDF</div></li>
                                                <li><a href="/merge_pdf"><i className="ico ico--merge"></i> Merge PDF</a></li>
                                                <li><a href="/split_pdf"><i className="ico ico--split"></i> Split PDF</a></li>
                                                <li><a href="/remove-pages"><i className="ico ico--remove"></i> Remove pages</a></li>
                                                <li><a href="/split_pdf#split,extract"><i className="ico ico--extract"></i> Extract pages</a></li>
                                                <li><a href="/organize-pdf"><i className="ico ico--organize"></i> Organize PDF</a></li>
                                                <li><a href="/scan-pdf"><i className="ico ico--scan"></i> Scan to PDF</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><div>Optimize PDF</div></li>
                                                <li><a href="/compress_pdf"><i className="ico ico--compress"></i> Compress PDF</a></li>
                                                <li><a href="/repair-pdf"><i className="ico ico--repair"></i> Repair PDF</a></li>
                                                <li><a href="/ocr-pdf"><i className="ico ico--pdfocr"></i> OCR PDF</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><div>Convert to PDF</div></li>
                                                <li><a className="nav__item--active" href="/jpg_to_pdf"><i className="ico ico--jpgpdf"></i> JPG to PDF</a></li>
                                                <li><a href="/word_to_pdf"><i className="ico ico--wordpdf"></i>WORD to PDF</a></li>
                                                <li><a href="/powerpoint_to_pdf"><i className="ico ico--powerpointpdf"></i> POWERPOINT to PDF</a></li>
                                                <li><a href="/excel_to_pdf"><i className="ico ico--excelpdf"></i> EXCEL to PDF</a></li>
                                                <li><a href="/html-to-pdf"><i className="ico ico--htmlpdf"></i> HTML to PDF</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><div>Convert from PDF</div></li>
                                                <li><a href="/pdf_to_jpg"><i className="ico ico--pdfjpg"></i> PDF to JPG</a></li>
                                                <li><a href="/pdf_to_word"><i className="ico ico--pdfword"></i>PDF to WORD</a></li>
                                                <li><a href="/pdf_to_powerpoint"><i className="ico ico--pdfpowerpoint"></i> PDF to POWERPOINT</a></li>
                                                <li><a href="/pdf_to_excel"><i className="ico ico--pdfexcel"></i> PDF to EXCEL</a></li>
                                                <li><a href="/convert-pdf-to-pdfa"><i className="ico ico--pdfa"></i> PDF to PDF/A</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><div>Edit PDF</div></li>
                                                <li><a href="/rotate_pdf"><i className="ico ico--rotate"></i>Rotate PDF</a></li>
                                                <li><a href="/add_pdf_page_number"><i className="ico ico--pagenumber"></i> Add page numbers</a></li>
                                                <li><a href="/pdf_add_watermark"><i className="ico ico--watermark"></i> Add watermark</a></li>
                                                <li><a href="/edit-pdf"><i className="ico ico--editpdf"></i>Edit PDF</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><div>PDF security</div></li>
                                                <li><a href="/unlock_pdf"><i className="ico ico--unlock"></i> Unlock PDF</a></li>
                                                <li><a href="/protect-pdf"><i className="ico ico--protect"></i>Protect PDF</a></li>
                                                <li><a href="/sign-pdf"><i className="ico ico--sign"></i>Sign PDF</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="desktop tooltip tooltip--bottom" title="iLovePDF Desktop, work offline">
                        <a href="/desktop" title="Desktop">
                            <i className="ico ico--desk"></i>
                        </a>
                    </div>
                    <div className="top-menu">
                        <ul className="nav">
                            <li className="nav__item nav__item--gray">
                                <a href="/login"><span>Log in</span></a>
                            </li>
                            <li className="nav__item nav__item--red">
                                <a href="/register">
                                    <i className="ico ico--user"></i>
                                    <span>Sign up</span></a>
                            </li>
                            <li className="nav__item nav__item--sub">
                                <i className="ico ico--hamburger"></i>
                                <ul>
                                    <li><a href="/"><i className="ico ico--ilovepdf"></i> Home</a></li>
                                    <li className="nav__item--sub">
                                        <a><i className="ico ico--product"></i> Product</a>
                                        <ul className="product__menu">
                                            <li><a href="/desktop"><i className="ico ico--desktop"></i> Desktop</a></li>
                                            <li><a href="/mobile"><i className="ico ico--app"></i> Mobile</a></li>
                                            <li><a href="https://signature.ilovepdf.com"><i className="ico ico--signature"></i> Signature</a></li>
                                            <li><a href="/features"><i className="ico ico--features"></i> Features</a></li>
                                            <li><a href="https://developer.ilovepdf.com" target="_blank" rel="noopener"><i className="ico ico--developer"></i> API Rest</a></li>
                                            <li><a href="https://wordpress.org/plugins/ilovepdf/" rel="nofollow noopener" target="_blank"><i className="ico ico--wordpress"></i> Wordpress Plugin</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav__item--sub">
                                        <a><i className="ico ico--solutions"></i> Solutions</a>
                                        <ul>
                                            <li><a href="/business"><i className="ico ico--business"></i> Business</a></li>
                                            <li><a href="/education"><i className="ico ico--education"></i> Education</a></li>
                                            <li><a href="https://developer.ilovepdf.com" target="_blank" rel="noopener"><i className="ico ico--app"></i> Developers</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/pricing"><i className="ico ico--pricing"></i> Pricing</a></li>

                                    <li className="divider"></li>
                                    <li className="nav__item--sub"><a href="#"><i className="ico ico--lang"></i> Language</a><span className="lang__current">
                                        <i className="ico ico--lang"></i>
                                        English <i className="ico ico--down"></i>
                                    </span>
                                        <ul className="lang__menu">
                                            <li><a href="/"><svg aria-hidden="true" width="12" height="12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" className=""></path></svg> English</a></li>
                                            <li><a href="/es"> Español</a></li>
                                            <li><a href="/fr"> Français</a></li>
                                            <li><a href="/de"> Deutsch</a></li>
                                            <li><a href="/it"> Italiano</a></li>
                                            <li><a href="/pt"> Português</a></li>
                                            <li><a href="/ja"> 日本語</a></li>
                                            <li><a href="/ru"> Pусский</a></li>
                                            <li><a href="/ko"> 한국어</a></li>
                                            <li><a href="/zh-cn"> 中文 (简体)</a></li>
                                            <li><a href="/zh-tw"> 中文 (繁體)</a></li>
                                            <li><a href="/ar"> العربية</a></li>
                                            <li><a href="/bg"> Български</a></li>
                                            <li><a href="/ca"> Català</a></li>
                                            <li><a href="/nl"> Dutch</a></li>
                                            <li><a href="/el"> Ελληνικά</a></li>
                                            <li><a href="/hi"> हिन्दी</a></li>
                                            <li><a href="/id"> Bahasa Indonesia</a></li>
                                            <li><a href="/ms"> Bahasa Melayu</a></li>
                                            <li><a href="/pl"> Polski</a></li>
                                            <li><a href="/sv"> Svenska</a></li>
                                            <li><a href="/th"> ภาษาไทย</a></li>
                                            <li><a href="/tr"> Türkçe</a></li>
                                            <li><a href="/uk"> Українська</a></li>
                                            <li><a href="/vi"> Tiếng Việt</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav__item--sub"><a ><i className="ico ico--help"></i> Help</a>
                                        <ul>
                                            <li><a href="/help/faq"><i className="ico ico--faq"></i> FAQ</a></li>
                                            <li><a href="/help/documentation"><i className="ico ico--documentation"></i> Tools</a></li>
                                            <li><a href="/help/legal"><i className="ico ico--legal"></i> Legal &amp; Privacy</a></li>
                                            <li><a href="/help/about"><i className="ico ico--about"></i> Our Story</a></li>
                                            <li><a href="/contact"><i className="ico ico--contact"></i> Contact</a></li>
                                        </ul>
                                    </li>
                                    <li className="divider"></li>
                                    <li><a href="https://www.iloveimg.com/"><i className="ico ico--iloveimg"></i> iLoveIMG</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>    </div>
            </div><div className="main">

                <div className="tool">
                    <div className="tool__workarea" id="workArea">
                        <div id="dropArea"></div>
                        <div className="tool__header">
                            <h1 className="tool__header__title">IMAGE to PPT</h1>
                            <h2 className="tool__header__subtitle">File của bạn đã được chuyển đổi thành công 😒 Nhấn vào bên duới để Download</h2>
                        </div>
                        <div className="uploading__bar uploading__bar--small">
                            <span className="uploading__bar__completed"></span>
                        </div>
                       
                        
                        <a className="uploader__btn tooltip--left" onClick={DownloadClick} > Download</a>
                        <div id="ad" className="add">
                            <div id='div-gpt-ad-1662466977519-0' className="in_add">

                            </div>
                        </div>

                        <div className="sidetools">
                            <a id="settingsToogle" className="btn-icon btn-icon--white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M24 14.187V9.813c-2.148-.766-2.726-.802-3.027-1.53s.083-1.17 1.06-3.223L18.94 1.968c-2.026.963-2.488 1.364-3.224 1.06-.727-.302-.768-.89-1.527-3.027H9.813c-.764 2.144-.8 2.725-1.53 3.027-.752.313-1.203-.1-3.223-1.06L1.968 5.06c.977 2.055 1.362 2.493 1.06 3.224S2.146 9.05 0 9.813v4.375c2.14.76 2.725.8 3.027 1.528.304.734-.08 1.167-1.06 3.223l3.093 3.093c2-.95 2.47-1.373 3.223-1.06.728.302.764.88 1.53 3.027h4.374c.758-2.13.8-2.723 1.537-3.03.745-.308 1.186.1 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.06-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.16-1.076-3.573-.5-1.396.58-1.8 1.693-2.188 2.877h-1.534c-.398-1.185-.79-2.297-2.183-2.875-1.42-.588-2.507-.045-3.58.488L4.39 18.53c.557-1.118 1.066-2.18.487-3.58-.58-1.39-1.69-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.79 2.875-2.184s.068-2.46-.488-3.58L5.47 4.387c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.7 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.42.588 2.506.045 3.58-.488l1.084 1.084c-.556 1.12-1.065 2.187-.488 3.58s1.69 1.784 2.875 2.183v1.534c-1.188.398-2.302.79-2.877 2.183zM12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" /></svg>
                            </a>
                            <a className="btn-icon btn-icon--white tooltip active tooltip--left order" id="orderByName" data-order="asc" href="javascript:;" title="Order files by name">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="#383E45" fill-rule="evenodd"><path d="M2.947 15.297V.23c0-.067.026-.123.077-.166S3.14 0 3.22 0h1.635c.08 0 .145.022.196.065s.077.1.077.166v15.066h2.5a.39.39 0 0 1 .261.087.28.28 0 0 1 .102.222c0 .077-.038.154-.114.23l-3.62 3.076a.42.42 0 0 1-.261.087c-.09 0-.178-.03-.26-.087L.11 15.828c-.113-.103-.14-.215-.08-.338.06-.13.174-.193.34-.193h2.575z" fill-rule="nonzero" /><path d="M11.222 20.2l2.94-7.52c.194-.496.555-.67 1.1-.67h.54c.513 0 .97.12 1.22.804l2.746 7.386c.083.214.222.603.222.845 0 .536-.485.965-1.068.965-.5 0-.86-.174-1.026-.603l-.582-1.6h-3.66l-.596 1.6c-.153.43-.47.603-1.012.603-.624 0-1.054-.375-1.054-.965 0-.24.14-.63.222-.845zm5.602-1.93l-1.3-3.874h-.028L14.15 18.27h2.663zM11.346 8l4.75-6.083h-3.66c-.602 0-1.088-.333-1.088-.958S11.832 0 12.434 0h5.53c.538 0 .973.25.973 1.042 0 .278-.102.583-.294.82l-4.826 6.222h4.096c.602 0 1.088.333 1.088.958s-.486.958-1.088.958h-5.696C11.448 10 11 9.722 11 8.875c0-.36.154-.625.346-.875z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="#383E45" fill-rule="evenodd"><path d="M2.947 15.297V.23c0-.066.026-.122.077-.165S3.14 0 3.22 0h1.634c.08 0 .146.022.196.065s.077.1.077.166v15.066h.33 2.18c.106 0 .193.03.26.087a.28.28 0 0 1 .102.222c0 .077-.038.154-.114.23l-3.62 3.076c-.075.058-.162.087-.26.087a.46.46 0 0 1-.261-.087L.1 15.828c-.112-.103-.14-.216-.078-.328.06-.14.174-.203.34-.203h2.575z" fill-rule="nonzero" /><path d="M11.212 8.083L14.016.66c.185-.5.53-.66 1.058-.66h.516c.5 0 .926.12 1.164.794l2.62 7.3c.08.212.212.595.212.833 0 .53-.463.952-1.02.952-.476 0-.82-.172-.98-.595l-.556-1.587h-3.5l-.57 1.587c-.146.423-.45.595-.966.595C11.41 9.87 11 9.5 11 8.917c0-.238.132-.622.212-.833zm5.344-1.905l-1.23-3.823H15.3l-1.283 3.823h2.54zm-5.2 13.442l4.908-5.794h-3.783c-.622 0-1.124-.317-1.124-.913S11.86 12 12.482 12h5.715c.556 0 1.005.238 1.005.992a1.21 1.21 0 0 1-.304.78L13.9 19.7h4.233c.622 0 1.124.317 1.124.913s-.503.913-1.124.913h-5.887c-.794 0-1.257-.265-1.257-1.072 0-.344.16-.595.357-.833z" /></svg>
                            </a>
                            <a className="btn-icon btn-icon--white tooltip active tooltip--left" id="toggleCover" href="javascript:;" title="Show-hide pdf covers">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 19"><path d="M11 4c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92A11.82 11.82 0 0 0 21.99 9c-1.73-4.4-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C9.74 4.13 10.35 4 11 4zM1 1.27L3.74 4A11.8 11.8 0 0 0 0 9c1.73 4.4 6 7.5 11 7.5a11.78 11.78 0 0 0 4.38-.84l.42.42L18.73 19 20 17.73 2.27 0 1 1.27zM6.53 6.8l1.55 1.55A2.82 2.82 0 0 0 8 9c0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.4.53-2.2.53-2.76 0-5-2.24-5-5 0-.8.2-1.53.53-2.2zm4.3-.78L14 9.17V9c0-1.66-1.34-3-3-3l-.17.01z" fill="#383E45" fill-rule="evenodd" /></svg>
                            </a>
                        </div>        <div className="tool__workarea__rendered" id="fileGroups"></div>
                    </div>
                    <div id="sidebar" className="tool__sidebar">
                        <div className="option__panel option__panel--active" id="panel-options" data-process="yes">
                            <div className="option__panel__title">Image to PDF options</div>
                            <div className="option__panel__content">
                                <div className="option__title">
                                    Select the page orientation</div>
                                <ul className="option__image">
                                    <li className="option__image__item option--active" data-name="orientation" data-value="portrait">
                                        <svg width="24px" height="32px" viewBox="0 0 24 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-444.000000, -705.000000)" fill="#161616" fill-rule="nonzero">
                                                    <path d="M447,708 L447,734 L465,734 L465,708 L447,708 Z M446,705 L466,705 C467.104569,705 468,705.895431 468,707 L468,735 C468,736.104569 467.104569,737 466,737 L446,737 C444.895431,737 444,736.104569 444,735 L444,707 C444,705.895431 444.895431,705 446,705 Z" id="portrait"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="option__image__item__title">Portrait</div>
                                    </li>
                                    <li className="option__image__item" data-name="orientation" data-value="landscape">
                                        <svg width="32px" height="24px" viewBox="0 0 32 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-571.000000, -709.000000)" fill="#969696" fill-rule="nonzero">
                                                    <path d="M574,730 L600,730 L600,712 L574,712 L574,730 Z M571,731 L571,711 C571,709.895431 571.895431,709 573,709 L601,709 C602.104569,709 603,709.895431 603,711 L603,731 C603,732.104569 602.104569,733 601,733 L573,733 C571.895431,733 571,732.104569 571,731 Z" id="landscape"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="option__image__item__title">Landscape</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="option__panel__content">
                                <div className="form__group"><div className="option__title">
                                    Page size</div>
                                    <select name="pagesize" id="pagesize" className="input option">
                                        <option value="fit">Fit (Same page size as image)</option>
                                        <option value="A4">A4 (297x210 mm)</option>
                                        <option value="letter">US Letter (215x279.4 mm)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="option__panel__content">
                                <div className="option__title">
                                    Margin</div>
                                <ul className="option__image">
                                    <li className="option__image__item option--active" data-name="margin" data-value="0">

                                        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-310.000000, -818.000000)" fill="#979797">
                                                    <g transform="translate(310.000000, 818.000000)">
                                                        <path d="M3,3 L3,29 L29,29 L29,3 L3,3 Z M2,0 L30,0 C31.1045695,-2.02906125e-16 32,0.8954305 32,2 L32,30 C32,31.1045695 31.1045695,32 30,32 L2,32 C0.8954305,32 1.3527075e-16,31.1045695 0,30 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z" id="Rectangle-2-Copy-3" fill-rule="nonzero"></path>
                                                        <path d="M9.49927274,9 C10.5384703,9 11.3846154,9.82810603 11.3846154,10.8461538 C11.3846154,11.8642017 10.5384703,12.6923077 9.49927274,12.6923077 C8.45904829,12.6923077 7.61290323,11.8642017 7.61290323,10.8461538 C7.61290323,9.82810603 8.45904829,9 9.49927274,9 Z" id="Path" transform="translate(9.498759, 10.846154) scale(-1, 1) translate(-9.498759, -10.846154) "></path>
                                                        <path d="M13.3544201,20.9990333 L7.37345658,20.9990333 C7.2894992,20.9990333 7.21253827,20.9555336 7.17155908,20.885934 C7.13057988,20.8153678 7.13157938,20.729335 7.17355806,20.6607021 L13.3754094,10.4875648 C13.4583673,10.3502989 13.6922486,10.3502989 13.7752064,10.4875648 L17.3883721,16.4160949 L19.811142,13.9926765 C19.8551197,13.9482101 19.9150893,13.9240436 19.9780573,13.9240436 L19.9860532,13.9240436 C20.0520198,13.9259769 20.1139883,13.9549767 20.155967,14.0042764 L25.8980518,20.5891692 C25.9590208,20.6297689 26,20.6984019 26,20.7757347 C26,20.8994673 25.8960528,21 25.7671182,21 L25.7561238,21 L19.7871542,21 L19.7761598,21 L13.3544201,21 L13.3544201,20.9990333 Z" id="Path" transform="translate(16.570720, 15.692308) scale(-1, 1) translate(-16.570720, -15.692308) "></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="option__image__item__title">No margin</div>
                                    </li>
                                    <li className="option__image__item" data-name="margin" data-value="20">
                                        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-441.000000, -818.000000)" fill="#161616">
                                                    <g transform="translate(441.000000, 818.000000)">
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 0 2 0 2 2 0 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="4 0 6 0 6 2 4 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 2 4 2 4 4 2 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 4 2 4 2 6 0 6"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 6 4 6 4 8 2 8"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 8 2 8 2 10 0 10"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 10 4 10 4 12 2 12"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 12 2 12 2 14 0 14"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 14 4 14 4 16 2 16"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 16 2 16 2 18 0 18"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 18 4 18 4 20 2 20"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 20 2 20 2 22 0 22"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 22 4 22 4 24 2 24"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 24 2 24 2 26 0 26"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 26 4 26 4 28 2 28"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 28 2 28 2 30 0 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="4 28 6 28 6 30 4 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 30 4 30 4 32 2 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="6 30 8 30 8 32 6 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="10 30 12 30 12 32 10 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="8 0 10 0 10 2 8 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="6 2 8 2 8 4 6 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="10 2 12 2 12 4 10 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="8 28 10 28 10 30 8 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="12 0 14 0 14 2 12 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="16 0 18 0 18 2 16 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="14 2 16 2 16 4 14 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="12 28 14 28 14 30 12 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="16 28 18 28 18 30 16 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="14 30 16 30 16 32 14 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="18 30 20 30 20 32 18 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="22 30 24 30 24 32 22 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="20 0 22 0 22 2 20 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="18 2 20 2 20 4 18 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="22 2 24 2 24 4 22 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="20 28 22 28 22 30 20 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="24 0 26 0 26 2 24 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 0 30 0 30 2 28 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="26 2 28 2 28 4 26 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 4 30 4 30 6 28 6"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 8 30 8 30 10 28 10"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 12 30 12 30 14 28 14"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 16 30 16 30 18 28 18"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 20 30 20 30 22 28 22"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 24 30 24 30 26 28 26"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="24 28 26 28 26 30 24 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 28 30 28 30 30 28 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="26 30 28 30 28 32 26 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 30 32 30 32 32 30 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 2 32 2 32 4 30 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 6 32 6 32 8 30 8"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 10 32 10 32 12 30 12"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 14 32 14 32 16 30 16"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 18 32 18 32 20 30 20"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 22 32 22 32 24 30 24"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 26 32 26 32 28 30 28"></polygon>
                                                        <path d="M10.8080731,11.1026393 C11.5787699,11.1026393 12.2062937,11.7299923 12.2062937,12.5012407 C12.2062937,13.272489 11.5787699,13.8998421 10.8080731,13.8998421 C10.0366148,13.8998421 9.40909091,13.272489 9.40909091,12.5012407 C9.40909091,11.7299923 10.0366148,11.1026393 10.8080731,11.1026393 Z" id="Path" transform="translate(10.807692, 12.501241) scale(-1, 1) translate(-10.807692, -12.501241) "></path>
                                                        <path d="M13.6671536,20.1928161 L9.23151086,20.1928161 C9.16924582,20.1928161 9.11216953,20.1598617 9.08177826,20.1071348 C9.051387,20.0536755 9.05212825,19.9884991 9.08326077,19.9365045 L13.6827199,12.2295823 C13.7442437,12.125593 13.9176963,12.125593 13.9792201,12.2295823 L16.6588405,16.720893 L18.4556317,14.88497 C18.4882467,14.8512833 18.5327217,14.8329753 18.5794205,14.8329753 L18.5853505,14.8329753 C18.634273,14.83444 18.6802306,14.8564095 18.7113631,14.8937578 L22.969847,19.8823129 C23.0150633,19.9130703 23.0454545,19.9650649 23.0454545,20.0236504 C23.0454545,20.1173872 22.9683645,20.1935484 22.8727432,20.1935484 L22.8645894,20.1935484 L18.4378416,20.1935484 L18.4296879,20.1935484 L13.6671536,20.1935484 L13.6671536,20.1928161 Z" id="Path" transform="translate(16.052448, 16.172569) scale(-1, 1) translate(-16.052448, -16.172569) "></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="option__image__item__title">Small</div>
                                    </li>
                                    <li className="option__image__item" data-name="margin" data-value="40">

                                        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-571.000000, -818.000000)" fill="#969696">
                                                    <g transform="translate(571.000000, 818.000000)">
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 0 2 0 2 2 0 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="4 0 6 0 6 2 4 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 2 4 2 4 4 2 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 4 2 4 2 6 0 6"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="4 4 6 4 6 6 4 6"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 6 4 6 4 8 2 8"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 8 2 8 2 10 0 10"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 10 4 10 4 12 2 12"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 12 2 12 2 14 0 14"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 14 4 14 4 16 2 16"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 16 2 16 2 18 0 18"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 18 4 18 4 20 2 20"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 20 2 20 2 22 0 22"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 22 4 22 4 24 2 24"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 24 2 24 2 26 0 26"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 26 4 26 4 28 2 28"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="0 28 2 28 2 30 0 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="4 28 6 28 6 30 4 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="2 30 4 30 4 32 2 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="6 30 8 30 8 32 6 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="10 30 12 30 12 32 10 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="8 0 10 0 10 2 8 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="6 2 8 2 8 4 6 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="10 2 12 2 12 4 10 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="8 28 10 28 10 30 8 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="12 0 14 0 14 2 12 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="16 0 18 0 18 2 16 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="14 2 16 2 16 4 14 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="12 28 14 28 14 30 12 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="16 28 18 28 18 30 16 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="14 30 16 30 16 32 14 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="18 30 20 30 20 32 18 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="22 30 24 30 24 32 22 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="20 0 22 0 22 2 20 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="18 2 20 2 20 4 18 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="22 2 24 2 24 4 22 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="20 28 22 28 22 30 20 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="24 0 26 0 26 2 24 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 0 30 0 30 2 28 2"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="26 2 28 2 28 4 26 4"></polygon>
                                                        <path d="M26,4 L24,4 L24,6 L22,6 L22,4 L20,4 L20,6 L18,6 L18,4 L16,4 L16,6 L14,6 L14,4 L12,4 L12,6 L10,6 L10,4 L8,4 L8,6 L6,6 L6,8 L4,8 L4,10 L6,10 L6,12 L4,12 L4,14 L6,14 L6,16 L4,16 L4,18 L6,18 L6,20 L4,20 L4,22 L6,22 L6,24 L4,24 L4,26 L6,26 L6,28 L8,28 L8,26 L10,26 L10,28 L12,28 L12,26 L14,26 L14,28 L16,28 L16,26 L18,26 L18,28 L20,28 L20,26 L22,26 L22,28 L24,28 L24,26 L26,26 L26,24 L28,24 L28,22 L26,22 L26,20 L28,20 L28,18 L26,18 L26,16 L28,16 L28,14 L26,14 L26,12 L28,12 L28,10 L26,10 L26,8 L28,8 L28,6 L26,6 L26,4 Z M24,24 L8,24 L8,8 L24,8 L24,24 Z" id="Shape" fill-rule="nonzero"></path>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 4 30 4 30 6 28 6"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 8 30 8 30 10 28 10"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 12 30 12 30 14 28 14"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 16 30 16 30 18 28 18"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 20 30 20 30 22 28 22"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 24 30 24 30 26 28 26"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="26 26 28 26 28 28 26 28"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="24 28 26 28 26 30 24 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="28 28 30 28 30 30 28 30"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="26 30 28 30 28 32 26 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 30 32 30 32 32 30 32"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 2 32 2 32 4 30 4"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 6 32 6 32 8 30 8"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 10 32 10 32 12 30 12"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 14 32 14 32 16 30 16"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 18 32 18 32 20 30 20"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 22 32 22 32 24 30 24"></polygon>
                                                        <polygon id="Shape" fill-rule="nonzero" points="30 26 32 26 32 28 30 28"></polygon>
                                                        <path d="M12.2484141,12.3636364 C12.8053047,12.3636364 13.2587413,12.8169495 13.2587413,13.3742387 C13.2587413,13.9315278 12.8053047,14.384841 12.2484141,14.384841 C11.6909732,14.384841 11.2375367,13.9315278 11.2375367,13.3742387 C11.2375367,12.8169495 11.6909732,12.3636364 12.2484141,12.3636364 Z" id="Path" transform="translate(12.248139, 13.374239) scale(-1, 1) translate(-12.248139, -13.374239) "></path>
                                                        <path d="M14.3143304,18.9320222 L11.1092207,18.9320222 C11.0642292,18.9320222 11.022987,18.90821 11.0010269,18.8701105 C10.9790667,18.8314819 10.9796023,18.7843867 11.0020981,18.7468164 L14.3255783,13.1779436 C14.3700342,13.1028029 14.4953677,13.1028029 14.5398236,13.1779436 L16.4760654,16.4232778 L17.7743919,15.0966753 C17.7979589,15.072334 17.8300957,15.059105 17.8638393,15.059105 L17.8681242,15.059105 C17.9034747,15.0601633 17.9366827,15.0760381 17.9591785,15.1030252 L21.0362765,18.7076586 C21.0689489,18.7298833 21.0909091,18.7674536 21.0909091,18.8097864 C21.0909091,18.8775187 21.0352053,18.9325513 20.9661112,18.9325513 L20.9602195,18.9325513 L17.7615372,18.9325513 L17.7556454,18.9325513 L14.3143304,18.9325513 L14.3143304,18.9320222 Z" id="Path" transform="translate(16.037898, 16.027070) scale(-1, 1) translate(-16.037898, -16.027070) "></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="option__image__item__title">Big</div>
                                    </li>
                                </ul>
                            </div>


                            <div className="option__panel__content">
                                <div className="form__group  form__group--inline">
                                    <div className="checkbox">
                                        <input type="checkbox" name="merge_after" id="merge_after" value="1" />
                                        <label for="merge_after">Merge all images in one PDF file</label>
                                    </div>
                                </div>

                            </div>
                        </div>    </div>
                </div>

                <div id="uploading" className="uploading">
                    <div id="upload-status" className="uploading__status">
                        <div className="uploading__status__title drive"><img src="/img/svg_icons/preload.svg" alt="Uploading" />Getting files from Drive</div>
                        <div className="uploading__status__title dropbox"><img src="/img/svg_icons/preload.svg" alt="Uploading" />Getting files from Dropbox</div>
                        <div className="uploading__status__title user">Uploading file <span className="uploading__status__current">0</span> of <span className="uploading__status__total">0</span></div>
                        <div className="uploading__status__file"></div>
                        <div className="uploading__status__info">
                            Time left <span id="timeLeft">- seconds</span> -
                            Upload speed <span id="uploadSpeed">- MB/S</span>        </div>
                        <div className="uploading__bar">
                            <span className="uploading__bar__completed"></span>
                        </div>
                        <div className="uploading__status__percent">
                            <div className="uploading__status__percent__value"></div>
                            Uploaded        </div>


                    </div>
                    <div id="upload-files" className="uploading__files"></div>
                </div><div id="process" className="process">
                    <p id="processText" className="processAction title2">Converting images to PDF...</p>
                    <img src="/img/svg_icons/preload.svg" alt="Processing" />
                    <div id="waitnotify"></div>
                </div>
            </div>
            <div className="footer">
                <div className="footer__copy">
                    &copy; iLovePDF 2023 &reg; - Your PDF Editor    </div>
            </div>
            <div id="network" className="network">
                <i className="ico ico--network"></i>
                <div className="network__text">
                    Woops! Something is wrong with your Internet connection...    </div>
            </div>
        </>
    )
}
export default HomeComponents