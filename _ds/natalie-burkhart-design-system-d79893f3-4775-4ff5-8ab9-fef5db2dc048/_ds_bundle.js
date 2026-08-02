/* @ds-bundle: {"format":3,"namespace":"NatalieBurkhartDesignSystem_d79893","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ContactLink","sourcePath":"components/core/ContactLink.jsx"},{"name":"NavLink","sourcePath":"components/core/NavLink.jsx"},{"name":"TextField","sourcePath":"components/core/TextField.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0dc18288c77a","components/core/ContactLink.jsx":"865c32c969b1","components/core/NavLink.jsx":"0f4553ca84cf","components/core/TextField.jsx":"3e2530854ba8","ui_kits/website/BackgroundSlideshow.jsx":"3fbb176b6fe8","ui_kits/website/ContactSection.jsx":"f4c29bae7665","ui_kits/website/Hero.jsx":"29e03efb4273","ui_kits/website/SiteHeader.jsx":"09f3b1279b4a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NatalieBurkhartDesignSystem_d79893 = window.NatalieBurkhartDesignSystem_d79893 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — editorial, square-cornered, uppercase grotesque label.
 * Variants: solid (black fill), outline (hairline), link (underline reveal).
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  icon = null,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: '0.7rem'
    },
    md: {
      padding: '13px 24px',
      fontSize: '0.74rem'
    },
    lg: {
      padding: '18px 34px',
      fontSize: '0.84rem'
    }
  };
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: 'var(--radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    opacity: disabled ? 0.35 : 1,
    transition: 'background-color var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease), opacity var(--dur) var(--ease)',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    ...sizes[size]
  };
  const variants = {
    solid: {
      background: hover && !disabled ? 'var(--white)' : 'var(--black)',
      color: hover && !disabled ? 'var(--black)' : 'var(--white)',
      borderColor: 'var(--black)'
    },
    outline: {
      background: hover && !disabled ? 'var(--black)' : 'transparent',
      color: hover && !disabled ? 'var(--white)' : 'var(--black)',
      borderColor: 'var(--black)'
    },
    link: {
      background: 'transparent',
      color: 'var(--black)',
      borderColor: 'transparent',
      padding: '6px 0',
      borderBottom: `1px solid ${hover && !disabled ? 'var(--black)' : 'var(--line)'}`,
      borderRadius: 0
    }
  };
  const finalStyle = {
    ...base,
    ...variants[variant],
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: finalStyle
    }, handlers, rest), children, icon);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: finalStyle
  }, handlers, rest), children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ContactLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * ContactLink — a tracked, optionally icon-led link for email / social.
 * Icon-agnostic: pass any node (e.g. a Lucide SVG) as `icon`.
 */
function ContactLink({
  children,
  href = '#',
  icon = null,
  external = false,
  inverse = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const fg = inverse ? 'var(--white)' : 'var(--black)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: fg,
      textDecoration: 'none',
      opacity: hover ? 0.55 : 1,
      transition: 'opacity var(--dur) var(--ease), transform var(--dur) var(--ease)',
      transform: hover ? 'translateX(3px)' : 'none',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '17px',
      height: '17px'
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ContactLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContactLink.jsx", error: String((e && e.message) || e) }); }

// components/core/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * NavLink — minimal editorial link with an underline that wipes in on hover.
 * Use for top nav and inline navigation.
 */
function NavLink({
  children,
  href = '#',
  active = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const lit = hover || active;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--black)',
      textDecoration: 'none',
      paddingBottom: '4px',
      display: 'inline-block',
      opacity: lit ? 1 : 0.62,
      transition: 'opacity var(--dur) var(--ease)',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '1px',
      width: '100%',
      background: 'var(--black)',
      transform: `scaleX(${lit ? 1 : 0})`,
      transformOrigin: 'left',
      transition: 'transform var(--dur) var(--ease)'
    }
  }));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/core/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * TextField — minimal underline-only input. No box, no fill; just a
 * hairline that darkens on focus. Works for inputs and textareas.
 */
function TextField({
  label,
  type = 'text',
  multiline = false,
  rows = 3,
  value,
  defaultValue,
  placeholder,
  name,
  onChange,
  inverse = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fg = inverse ? 'var(--white)' : 'var(--black)';
  const line = inverse ? 'var(--line-inverse)' : 'var(--line)';
  const fieldStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focus ? fg : line}`,
    borderRadius: 0,
    padding: '10px 0',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: 'var(--fs-body)',
    color: fg,
    outline: 'none',
    resize: multiline ? 'vertical' : 'none',
    transition: 'border-color var(--dur) var(--ease)',
    boxSizing: 'border-box'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: inverse ? 'rgba(255,255,255,0.6)' : 'var(--grey-500)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    name: name,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BackgroundSlideshow.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect
} = React;

/**
 * BackgroundSlideshow — full-bleed images that cross-fade, one per second.
 * Pass real photo URLs via `images`. With no images it renders monochrome
 * placeholder frames so the cadence and scrim are still visible.
 */
function BackgroundSlideshow({
  images = [],
  interval = 1000,
  fade = 800
}) {
  const placeholders = ['repeating-linear-gradient(28deg,#8f8f8f 0 26px,#b8b8b8 26px 52px)', 'repeating-linear-gradient(90deg,#2a2a2a 0 30px,#171717 30px 60px)', 'radial-gradient(circle at 32% 38%, #e2e2e2, #6f6f6f 75%)', 'repeating-linear-gradient(150deg,#454545 0 20px,#737373 20px 40px)', 'linear-gradient(115deg,#1d1d1d 0%,#5a5a5a 55%,#101010 100%)'];
  const frames = images.length ? images : placeholders;
  const isImage = images.length > 0;
  const [i, setI] = useState(0);
  useEffect(() => {
    if (frames.length < 2) return;
    const t = setInterval(() => setI(p => (p + 1) % frames.length), interval);
    return () => clearInterval(t);
  }, [frames.length, interval]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: 'var(--black)'
    }
  }, frames.map((f, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: idx === i ? 1 : 0,
      transition: `opacity ${fade}ms var(--ease)`,
      ...(isImage ? {
        backgroundImage: `url(${f})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(1) contrast(1.05)'
      } : {
        background: f
      })
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, var(--scrim-top) 0%, rgba(0,0,0,0.12) 32%, rgba(0,0,0,0.20) 60%, var(--scrim-bottom) 100%)'
    }
  }));
}
window.BackgroundSlideshow = BackgroundSlideshow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BackgroundSlideshow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
const mailIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 6 9 7 9-7"
}));
const igIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  width: "100%",
  height: "100%"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "6.5",
  r: "1"
}));

/**
 * ContactSection — the bottom band. Inline contact links always visible;
 * a "Write to me" toggle reveals a minimal underline-only form.
 */
function ContactSection({
  open,
  onToggle
}) {
  const {
    ContactLink,
    Button,
    TextField
  } = window.NatalieBurkhartDesignSystem_d79893;
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      borderTop: '1px solid var(--line-inverse)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ContactLink, {
    href: "mailto:natalie@onsite.studio",
    icon: mailIcon,
    inverse: true
  }, "natalie@onsite.studio"), /*#__PURE__*/React.createElement(ContactLink, {
    href: "https://instagram.com/natalie_onsite",
    icon: igIcon,
    external: true,
    inverse: true
  }, "@natalie_onsite")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    onClick: onToggle,
    style: {
      color: 'var(--white)',
      borderColor: 'rgba(255,255,255,0.6)',
      background: 'transparent'
    }
  }, open ? 'Close' : 'Write to me')), open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--space-6)',
      alignItems: 'end',
      maxWidth: '880px',
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    placeholder: "Your name",
    inverse: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    inverse: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Message",
    multiline: true,
    rows: 3,
    placeholder: "Tell me about the project",
    inverse: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => setSent(true),
    style: {
      background: 'var(--white)',
      color: 'var(--black)',
      borderColor: 'var(--white)'
    }
  }, "Send"), sent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body)',
      color: 'rgba(255,255,255,0.9)'
    }
  }, "Thank you \u2014 I'll be in touch."))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */

/**
 * Hero — the centerpiece. Giant stacked name, then ~10 lines of elegant
 * italic serif bio. Bio width is tuned so a line runs about as wide as
 * the name. White type over the rotating imagery.
 */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '20ch'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-hero)',
      fontSize: 'var(--fs-hero)',
      lineHeight: 'var(--lh-hero)',
      letterSpacing: 'var(--tracking-hero)',
      color: 'var(--white)',
      margin: 0
    }
  }, "Natalie", /*#__PURE__*/React.createElement("br", null), "Burkhart"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'var(--fs-bio)',
      lineHeight: 'var(--lh-bio)',
      color: 'rgba(255,255,255,0.94)',
      maxWidth: 'var(--measure)',
      marginTop: 'var(--space-7)',
      marginBottom: 0,
      textWrap: 'pretty'
    }
  }, "I am an architect, writer, and designer working where artificial intelligence meets the built environment. I draw, prototype, and build each project by hand \u2014 letting the machine widen the search for form while keeping the judgement, the line, and the final decision my own. I write about what this changes: how we conceive structure, how we document it, and how a practice stays human as its tools grow stranger. Everything here \u2014 the words and the work \u2014 is my own."));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* global React */

/**
 * SiteHeader — minimal top bar over the imagery: small wordmark left,
 * uppercase nav right. White (inverse) treatment.
 */
function SiteHeader({
  onContact
}) {
  const {
    NavLink
  } = window.NatalieBurkhartDesignSystem_d79893;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "Architecture\xA0\xD7\xA0AI"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement(InverseNav, {
    href: "#about"
  }, "About"), /*#__PURE__*/React.createElement(InverseNav, {
    href: "#writing"
  }, "Writing"), /*#__PURE__*/React.createElement(InverseNav, {
    href: "#contact",
    onClick: onContact
  }, "Contact")));
}

/* White variant of the nav link for use over imagery. */
function InverseNav({
  children,
  href,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      textDecoration: 'none',
      opacity: hover ? 1 : 0.78,
      paddingBottom: '4px',
      transition: 'opacity var(--dur) var(--ease)'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '1px',
      width: '100%',
      background: 'var(--white)',
      transform: `scaleX(${hover ? 1 : 0})`,
      transformOrigin: 'left',
      transition: 'transform var(--dur) var(--ease)'
    }
  }));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ContactLink = __ds_scope.ContactLink;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.TextField = __ds_scope.TextField;

})();
