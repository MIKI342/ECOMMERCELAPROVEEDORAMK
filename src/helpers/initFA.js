/**
 * Este archivo configura el uso de FontAwesome en la aplicación, registrando una amplia variedad de íconos 
 * de diferentes estilos (solid, regular, y de marcas) para uso en componentes.
 * 
 * - **Función Principal**: Carga y agrupa en la biblioteca los íconos necesarios para la aplicación mediante
 *   `library.add()`, lo que permite que cualquier ícono registrado aquí sea accesible globalmente en la app.
 * - **Categorías de Íconos**:
 *   - **Solid**: Íconos de formato sólido, utilizados para iconografía estándar de la UI.
 *   - **Regular**: Íconos en versión regular, menos pronunciados, adecuados para notificaciones o íconos secundarios.
 *   - **Brands**: Íconos de marcas populares, como redes sociales o herramientas de desarrollo.
 * 
 * **Uso en la App**: 
 * - Una vez registrados, los íconos se pueden utilizar en cualquier componente mediante `FontAwesomeIcon`.
 * - Facilita el mantenimiento y permite añadir o remover íconos en un único archivo.
 */

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faGooglePlusG,
  faGulp,
  faHotjar,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faLinkedinIn,
  faMediumM,
  faNodeJs,
  faPinterest,
  faSass,
  faTrello,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faCircle as farCircle,
  faClock as farClock,
  faComment as farComment,
  faCopy as farCopy,
  faDizzy as farDizzy,
  faFile as farFile,
  faFileArchive as farFileArchive,
  faFileAudio as farFileAudio,
  faFileCode as farFileCode,
  faFileImage as farFileImage,
  faFilePdf as farFilePdf,
  faFileVideo as farFileVideo,
  faHeart as farHeart,
  faImage as farImage,
  faLaughBeam as farLaughBeam,
  faLightbulb as farLightbulb,
  faObjectUngroup as farObjectUngroup,
  faPaperPlane as farPaperPlane,
  faQuestionCircle as farQuestionCircle,
  faSmileBeam as farSmileBeam,
  faStar as farStar,
  faEdit as farEdit
} from '@fortawesome/free-regular-svg-icons';
import {
  faAlignLeft,
  faAlignRight,
  faAngleRight,
  faArchive,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowsAltV,
  faArrowUp,
  faAt,
  faBan,
  faBell,
  faBook,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faCamera,
  faCaretDown,
  faCaretRight,
  faCaretUp,
  faCartPlus,
  faChartPie,
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCircleNotch,
  faClock,
  faCodeBranch,
  faCog,
  faComments,
  faCopy,
  faCrown,
  faDollarSign,
  faEdit,
  faEllipsisH,
  faEllipsisV,
  faEnvelope,
  faEnvelopeOpen,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faExternalLinkAlt,
  faEye,
  faFileAlt,
  faFileArchive,
  faFilePdf,
  faFilter,
  faFolderPlus,
  faGift,
  faGlobeAmericas,
  faGlobe,
  faHeart,
  faHome,
  faIcons,
  faImage,
  faInfo,
  faLink,
  faList,
  faListAlt,
  faListUl,
  faLocationArrow,
  faLock,
  faMinus,
  faMapMarkerAlt,
  faPalette,
  faPaperclip,
  faPencilAlt,
  faPercentage,
  faTags,
  faPhone,
  faPlay,
  faPlug,
  faPlus,
  faPlusSquare,
  faPoll,
  faPrint,
  faPuzzlePiece,
  faQuestionCircle,
  faRedo,
  faReply,
  faSearch,
  faShare,
  faShareAlt,
  faShoppingCart,
  faSignInAlt,
  faSlidersH,
  faSmileBeam,
  faSort,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDown,
  faSortAmountUp,
  faSortNumericDown,
  faSortNumericUp,
  faStar,
  faStarHalfAlt,
  faStream,
  faTag,
  faTh,
  faThumbsUp,
  faTimes,
  faTimesCircle,
  faTools,
  faTrash,
  faTrashAlt,
  faUser,
  faUserCircle,
  faUserFriends,
  faUserPlus,
  faUsers,
  faVideo,
  faCross,
  faFlag,
  faThumbtack,
  faTable,
  faChartLine,
  faShapes,
  faMap,
  faFire,
  faLayerGroup,
  faRocket,
  faWrench,
  faSun,
  faMoon,
  faAngleLeft,
  faInfoCircle,
  faSpinner,
  faCapsules,
  faTasks,
  faCloudDownloadAlt,
  faSyncAlt,
  faBug,
  faProjectDiagram,
  faBolt,
  faPaperPlane,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faInfinity,
  faChessRook,
  faCode,
  faFile,
  faMusic,
  faMobile,
  faBookOpen,
  faTint,
  faRedoAlt,
  faTrophy,
  faTicketAlt,
  faFileImport,
  faKey,
  faPhoneAlt,
  faObjectUngroup,
  faFileDownload,
  faEnvelopeOpenText,
  faUserGraduate,
  faChalkboardTeacher,
  faGraduationCap,
  faSignOutAlt,
  faDownload,
  faFileUpload,
  faExpandArrowsAlt,
  faUnlockAlt,
  faGripLines,
  faComment,
  faHeadphones,
  faClosedCaptioning,
  faMapPin,
  faPlayCircle,
  faPenNib,
  faAward,
  faBrush,
  faHashtag,
  faFileInvoiceDollar,
  faBalanceScaleLeft,
  faCommentDollar,
  faHandHoldingWater,
  faCameraRetro,
  faUtensils,
  faAdjust
} from '@fortawesome/free-solid-svg-icons';

library.add(
  // Solid
  faEnvelopeOpenText,
  faFileDownload,
  faObjectUngroup,
  faPhoneAlt,
  faKey,
  faFileImport,
  faTicketAlt,
  faChartPie,
  faCopy,
  faChessRook,
  faSearch,
  faHome,
  faBell,
  faPlay,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faExchangeAlt,
  faAngleRight,
  faAngleLeft,
  faEllipsisH,
  faCrown,
  faListAlt,
  faCheck,
  faBan,
  faStream,
  faArrowsAltV,
  faSort,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortNumericDown,
  faSortNumericUp,
  faSortAmountDown,
  faSortAmountUp,
  faCheckCircle,
  faUserCircle,
  faQuestionCircle,
  faLock,
  faCircle,
  faHeart,
  faShareAlt,
  faCaretRight,
  faArrowDown,
  faArrowUp,
  faArrowLeft,
  faArrowRight,
  faPrint,
  faDollarSign,
  faLink,
  faPlus,
  faMinus,
  faUser,
  faPencilAlt,
  faCamera,
  faTimesCircle,
  faSignInAlt,
  faBook,
  faPuzzlePiece,
  faTrash,
  faAlignLeft,
  faAlignRight,
  faPlug,
  faTimes,
  faFilter,
  faExternalLinkAlt,
  faCartPlus,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faArchive,
  faEnvelope,
  faClock,
  faStar,
  faReply,
  faLocationArrow,
  faCog,
  faPaperclip,
  faImage,
  faEllipsisV,
  faEnvelopeOpen,
  faRedo,
  faSlidersH,
  faTrashAlt,
  faFileArchive,
  faFilePdf,
  faFileAlt,
  faEye,
  faCaretUp,
  faCodeBranch,
  faExclamationTriangle,
  faListUl,
  faTh,
  faGift,
  faUsers,
  faGlobeAmericas,
  faGlobe,
  faPlusSquare,
  faCaretDown,
  faUserPlus,
  faCircleNotch,
  faExclamation,
  faThumbsUp,
  faComments,
  faPalette,
  faEdit,
  faTrashAlt,
  faShare,
  faCheckSquare,
  faTools,
  faCheckDouble,
  faSmileBeam,
  faPoll,
  faPercentage,
  faTags,
  faIcons,
  faList,
  faUserFriends,
  faExclamationCircle,
  faFolderPlus,
  faTag,
  faAt,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faMapMarkerAlt,
  faCross,
  faFlag,
  faThumbtack,
  faTable,
  faChartLine,
  faShapes,
  faMap,
  faFire,
  faLayerGroup,
  faRocket,
  faWrench,
  faSun,
  faMoon,
  faInfoCircle,
  faSpinner,
  faCapsules,
  faTasks,
  faCloudDownloadAlt,
  faSyncAlt,
  faBug,
  faProjectDiagram,
  faBolt,
  faPaperPlane,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faInfinity,
  faFile,
  faMusic,
  faMobile,
  faBookOpen,
  faTint,

  // Brand
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faPinterest,
  faGulp,
  faNodeJs,
  faSass,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faMediumM,
  faHotjar,
  faYoutube,
  faVideo,
  faInfo,
  faPhone,
  faTrello,
  faCode,
  faJs,
  faHtml5,
  faTrophy,

  // Regular
  farHeart,
  farLightbulb,
  farObjectUngroup,
  farPaperPlane,
  farStar,
  farImage,
  farFileArchive,
  farFilePdf,
  farFile,
  farFileVideo,
  farFileAudio,
  farFileImage,
  farFileCode,
  farClock,
  farQuestionCircle,
  farDizzy,
  farLaughBeam,
  farSmileBeam,
  farCircle,
  farCopy,
  farComment,
  farEdit,
  faRedoAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faGraduationCap,
  faSignOutAlt,
  faDownload,
  faFileUpload,
  faExpandArrowsAlt,
  faUnlockAlt,
  faGripLines,
  faComment,
  faHeadphones,
  faClosedCaptioning,
  faMapPin,
  faPlayCircle,
  faPenNib,
  faAward,
  faBrush,
  faHashtag,
  faFileInvoiceDollar,
  faBalanceScaleLeft,
  faCommentDollar,
  faHandHoldingWater,
  faCameraRetro,
  faUtensils,
  faAdjust
);
