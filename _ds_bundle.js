/* @ds-bundle: {"format":4,"namespace":"WheelCraftDesignSystem_a4385a","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Card","sourcePath":"components/feedback/Card.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BeforeAfterSlider","sourcePath":"components/marketing/BeforeAfterSlider.jsx"},{"name":"BookingForm","sourcePath":"components/marketing/BookingForm.jsx"},{"name":"GalleryGrid","sourcePath":"components/marketing/GalleryGrid.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"TrustBadgeRow","sourcePath":"components/marketing/TrustBadgeRow.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"f329d854351f","components/feedback/Card.jsx":"fff067b09ce9","components/feedback/Dialog.jsx":"7b92fc489185","components/feedback/Tooltip.jsx":"ead072bb5de6","components/forms/Button.jsx":"18bfaf1daf20","components/forms/Checkbox.jsx":"897fc431acfa","components/forms/Input.jsx":"f58fc3460ce6","components/forms/Radio.jsx":"6aac17ff1935","components/forms/Select.jsx":"6b8e3b3e64f9","components/forms/Switch.jsx":"ac3eb8dc1573","components/marketing/BeforeAfterSlider.jsx":"0391e714f0c3","components/marketing/BookingForm.jsx":"4faeb0e35958","components/marketing/GalleryGrid.jsx":"fd086f67894e","components/marketing/Hero.jsx":"4955a704dd92","components/marketing/TrustBadgeRow.jsx":"24ee4a90630a","components/navigation/Footer.jsx":"0418d48ce94f","components/navigation/Navbar.jsx":"a0e7ab27091b","components/navigation/Tabs.jsx":"88fc889558f0","ui_kits/website/Homepage.jsx":"c34e7fb00189"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WheelCraftDesignSystem_a4385a = window.WheelCraftDesignSystem_a4385a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--cloud-50)',
      color: 'var(--fg-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      border: '1px solid transparent'
    },
    success: {
      background: 'var(--success-100)',
      color: 'var(--success-600)',
      border: '1px solid transparent'
    },
    warning: {
      background: 'var(--warning-100)',
      color: 'var(--warning-600)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--ink-950)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  return React.createElement('span', {
    style: {
      ...tones[tone],
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Card.jsx
try { (() => {
function Card({
  image,
  eyebrow,
  title,
  description,
  footer,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--duration-base) var(--ease-standard),transform var(--duration-base) var(--ease-standard)',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-body)'
    }
  }, image && React.createElement('div', {
    style: {
      aspectRatio: '4/3',
      background: 'var(--ink-800)',
      overflow: 'hidden'
    }
  }, React.createElement('img', {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), React.createElement('div', {
    style: {
      padding: '24px'
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: '8px'
    }
  }, eyebrow), title && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--fg-primary)',
      marginBottom: '8px'
    }
  }, title), description && React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, description), footer && React.createElement('div', {
    style: {
      marginTop: '16px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  children,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(8,9,11,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: 'var(--font-body)'
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-3)',
      width: 'min(480px,90vw)',
      maxHeight: '85vh',
      overflow: 'auto',
      padding: '32px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--fg-primary)'
    }
  }, title), React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Close',
    style: {
      border: 'none',
      background: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: 'var(--fg-muted)',
      lineHeight: 1
    }
  }, '\u2715')), React.createElement('div', {
    style: {
      color: 'var(--fg-secondary)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      marginTop: '24px',
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-950)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-2)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  children,
  onClick,
  type = 'button'
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.45 : 1,
    letterSpacing: 'var(--ls-normal)'
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-body-sm)',
      padding: '8px 16px',
      minHeight: '36px'
    },
    md: {
      fontSize: 'var(--text-body)',
      padding: '12px 22px',
      minHeight: '44px'
    },
    lg: {
      fontSize: 'var(--text-body-lg)',
      padding: '16px 28px',
      minHeight: '52px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--fg-on-accent)'
    },
    dark: {
      background: 'var(--ink-950)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-950)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-950)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-strong)';
      if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--ink-950)';
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--cloud-50)';
      if (variant === 'dark') e.currentTarget.style.background = 'var(--ink-800)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.borderColor = variants[variant].borderColor || 'transparent';
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseDown: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-press)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, icon && iconPosition === 'left' ? React.createElement('span', {
    style: {
      display: 'flex'
    }
  }, icon) : null, children, icon && iconPosition === 'right' ? React.createElement('span', {
    style: {
      display: 'flex'
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  id
}) {
  const cid = id || React.useId();
  return React.createElement('label', {
    htmlFor: cid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    id: cid,
    checked,
    onChange,
    style: {
      appearance: 'none',
      width: '20px',
      height: '20px',
      minWidth: '20px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--accent)' : '#fff',
      borderColor: checked ? 'var(--accent)' : 'var(--border-default)',
      position: 'relative',
      cursor: 'pointer',
      backgroundImage: checked ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpath d='M5 13l4 4L19 7'/%3E%3C/svg%3E\")" : 'none',
      backgroundSize: '14px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  helper,
  value,
  onChange,
  required = false
}) {
  const [focused, setFocused] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--fg-primary)'
    }
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--accent)'
    }
  }, ' *')), React.createElement('input', {
    type,
    placeholder,
    value,
    required,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '12px 14px',
      minHeight: '44px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--error-600)' : focused ? 'var(--accent)' : 'var(--border-default)'}`,
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard),box-shadow var(--duration-base) var(--ease-standard)',
      background: '#fff',
      color: 'var(--fg-primary)'
    }
  }), (error || helper) && React.createElement('span', {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--error-600)' : 'var(--fg-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked,
  onChange,
  value
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked,
    onChange,
    style: {
      appearance: 'none',
      width: '20px',
      height: '20px',
      minWidth: '20px',
      border: '1px solid var(--border-default)',
      borderRadius: '50%',
      position: 'relative',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      background: '#fff',
      ...(checked ? {
        borderColor: 'var(--accent)',
        borderWidth: '6px'
      } : {})
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--fg-primary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '12px 14px',
      minHeight: '44px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: '#fff',
      color: value ? 'var(--fg-primary)' : 'var(--fg-muted)',
      outline: 'none'
    }
  }, React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder), options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value || o
  }, o.label || o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--fg-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: '40px',
      height: '24px',
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--accent)' : 'var(--silver-200)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      display: 'inline-block'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '19px' : '3px',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BeforeAfterSlider.jsx
try { (() => {
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After'
}) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const drag = React.useRef(false);
  const move = clientX => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    let pct = (clientX - r.left) / r.width * 100;
    pct = Math.max(0, Math.min(100, pct));
    setPos(pct);
  };
  return React.createElement('div', {
    ref,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      userSelect: 'none',
      cursor: 'ew-resize',
      background: 'var(--ink-900)'
    },
    onMouseDown: e => {
      drag.current = true;
      move(e.clientX);
    },
    onMouseMove: e => {
      if (drag.current) move(e.clientX);
    },
    onMouseUp: () => drag.current = false,
    onMouseLeave: () => drag.current = false,
    onTouchStart: e => move(e.touches[0].clientX),
    onTouchMove: e => move(e.touches[0].clientX)
  }, React.createElement('img', {
    src: afterImage,
    alt: afterLabel,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      width: pos + '%',
      overflow: 'hidden'
    }
  }, React.createElement('img', {
    src: beforeImage,
    alt: beforeLabel,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: ref.current ? ref.current.getBoundingClientRect().width : '100%',
      maxWidth: 'none',
      objectFit: 'cover'
    }
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: pos + '%',
      width: '2px',
      background: 'var(--accent)',
      transform: 'translateX(-1px)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '14px',
      boxShadow: 'var(--shadow-2)'
    }
  }, '\u2194')), React.createElement('span', {
    style: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      background: 'rgba(8,9,11,.6)',
      color: '#fff',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-body)'
    }
  }, beforeLabel), React.createElement('span', {
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      background: 'rgba(8,9,11,.6)',
      color: '#fff',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-body)'
    }
  }, afterLabel));
}
Object.assign(__ds_scope, { BeforeAfterSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BeforeAfterSlider.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BookingForm.jsx
try { (() => {
function BookingForm({
  onSubmit
}) {
  const [step, setStep] = React.useState(1);
  return React.createElement('form', {
    onSubmit: e => {
      e.preventDefault();
      if (step < 3) {
        setStep(step + 1);
      } else {
        onSubmit && onSubmit();
      }
    },
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px',
      maxWidth: '420px',
      boxShadow: 'var(--shadow-2)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, [1, 2, 3].map(s => React.createElement('div', {
    key: s,
    style: {
      flex: 1,
      height: '4px',
      borderRadius: 'var(--radius-full)',
      background: s <= step ? 'var(--accent)' : 'var(--silver-100)'
    }
  }))), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--fg-primary)'
    }
  }, step === 1 ? 'Choose a service' : step === 2 ? 'Your details' : 'Confirm booking'), step === 1 && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, ['Wheel repair', 'Bumper repair', 'Paint restoration'].map(s => React.createElement('label', {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 14px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body-sm)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'radio',
    name: 'svc',
    defaultChecked: s === 'Wheel repair'
  }), s))), step === 2 && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, React.createElement('input', {
    placeholder: 'Full name',
    style: {
      padding: '12px 14px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body)'
    }
  }), React.createElement('input', {
    placeholder: 'Phone number',
    style: {
      padding: '12px 14px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body)'
    }
  })), step === 3 && React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--fg-secondary)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, 'Wheel repair · Tuesday 9:00am drop-off. We\u2019ll confirm by SMS.'), React.createElement('button', {
    type: 'submit',
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '14px',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--fw-semibold)',
      cursor: 'pointer',
      minHeight: '44px'
    }
  }, step < 3 ? 'Continue' : 'Confirm booking'));
}
Object.assign(__ds_scope, { BookingForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BookingForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/GalleryGrid.jsx
try { (() => {
function GalleryGrid({
  items = []
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: 'var(--grid-gutter)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--ink-800)'
    }
  }, React.createElement('img', {
    src: it.image,
    alt: it.title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), it.title && React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '16px',
      background: 'linear-gradient(0deg,rgba(8,9,11,.75),transparent)',
      color: '#fff',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  }, it.title))));
}
Object.assign(__ds_scope, { GalleryGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/GalleryGrid.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  theme = 'dark',
  image
}) {
  const dark = theme === 'dark';
  return React.createElement('section', {
    style: {
      position: 'relative',
      minHeight: '560px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--grid-margin)',
      background: image ? `linear-gradient(0deg,rgba(8,9,11,.72),rgba(8,9,11,.4)),url(${image}) center/cover` : dark ? 'var(--ink-950)' : 'var(--cloud-50)',
      color: dark || image ? '#fff' : 'var(--fg-primary)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: '640px'
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--blue-400)',
      marginBottom: '16px'
    }
  }, eyebrow), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-lg)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: '0 0 20px'
    }
  }, title), description && React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: dark || image ? 'var(--silver-200)' : 'var(--fg-secondary)',
      margin: '0 0 32px'
    }
  }, description), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, primaryCta, secondaryCta)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustBadgeRow.jsx
try { (() => {
function TrustBadgeRow({
  items = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      color: 'var(--accent)'
    }
  }, it.icon), React.createElement('span', {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--fg-primary)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { TrustBadgeRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustBadgeRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({}) {
  const cols = [{
    h: 'Services',
    items: ['Wheel repairs', 'Bumper repairs', 'Paint restoration', 'Cosmetic repairs']
  }, {
    h: 'Company',
    items: ['About', 'Locations', 'Careers']
  }, {
    h: 'Support',
    items: ['Book a service', 'FAQs', 'Contact']
  }];
  return React.createElement('footer', {
    style: {
      background: 'var(--ink-950)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      padding: '64px var(--grid-margin) 32px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: '64px',
      flexWrap: 'wrap',
      marginBottom: '48px'
    }
  }, React.createElement('div', {
    style: {
      flex: '1 1 240px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      marginBottom: '12px'
    }
  }, React.createElement('span', null, 'Wheel'), React.createElement('span', {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--blue-400)'
    }
  }, 'Craft')), React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--silver-200)',
      maxWidth: '280px',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, 'Precision in every repair. Australian-owned wheel and bumper restoration.')), cols.map((c, i) => React.createElement('div', {
    key: i
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--silver-200)',
      marginBottom: '16px'
    }
  }, c.h), c.items.map((it, j) => React.createElement('div', {
    key: j,
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--silver-100)',
      marginBottom: '10px'
    }
  }, it))))), React.createElement('div', {
    style: {
      borderTop: '1px solid var(--ink-700)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-caption)',
      color: 'var(--graphite-300)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, React.createElement('span', null, '\u00A9 2026 Wheel Craft. All rights reserved.'), React.createElement('span', null, 'PRECISION // PASSION // PERFORMANCE // PERFECTION')));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  links = [],
  ctaLabel = 'Book now',
  onCta
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--grid-margin)',
      height: '72px',
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--fg-primary)'
    }
  }, React.createElement('span', {
    style: {
      fontWeight: 'var(--fw-regular)'
    }
  }, 'Wheel'), React.createElement('span', {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--accent)'
    }
  }, 'Craft')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '32px'
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: l.href || '#',
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--fg-primary)',
      textDecoration: 'none'
    }
  }, l.label))), React.createElement('button', {
    onClick: onCta,
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 20px',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      cursor: 'pointer'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => React.createElement('button', {
    key: i,
    onClick: () => onChange && onChange(it),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 18px',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: active === it ? 'var(--fg-primary)' : 'var(--fg-muted)',
      borderBottom: active === it ? '2px solid var(--accent)' : '2px solid transparent',
      marginBottom: '-1px',
      transition: 'color var(--duration-base) var(--ease-standard)'
    }
  }, it)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ph(hex) {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="700"><rect width="900" height="700" fill="${hex}"/></svg>`);
}
function Icon({
  name,
  size = 20,
  color
}) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          color: color || 'currentColor'
        }
      });
    }
  }, [name]);
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex'
    }
  });
}
function WCHomepage() {
  const {
    Navbar,
    Footer,
    Button,
    Badge,
    Card,
    TrustBadgeRow,
    BeforeAfterSlider,
    GalleryGrid,
    Tabs,
    BookingForm,
    Dialog
  } = window.WheelCraftDesignSystem_a4385a;
  const [bookOpen, setBookOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const services = [{
    eyebrow: 'Wheel Repairs',
    title: 'Diamond Cut Refinishing',
    description: 'Factory-precision finish for curb-damaged alloys, restored on our CNC lathe.',
    image: ph('161920')
  }, {
    eyebrow: 'Bumper Repairs',
    title: 'Cosmetic Bumper Restoration',
    description: 'Scuffs, cracks and scrapes repaired to an invisible, factory-matched finish.',
    image: ph('2a2e35')
  }, {
    eyebrow: 'Paint Restoration',
    title: 'Colour-Matched Paint Repair',
    description: 'Spot and panel respray with an exact factory colour match.',
    image: ph('4a4f58')
  }, {
    eyebrow: 'Cosmetic Repairs',
    title: 'Full Cosmetic Detailing',
    description: 'Interior and exterior cosmetic correction for a showroom finish.',
    image: ph('666c76')
  }];
  const gallery = [{
    image: ph('161920'),
    title: 'BMW M4 · Diamond Cut',
    cat: 'Wheels'
  }, {
    image: ph('2a2e35'),
    title: 'Porsche 911 · Bumper Repair',
    cat: 'Bumpers'
  }, {
    image: ph('4a4f58'),
    title: 'Tesla Model 3 · Paint Restoration',
    cat: 'Paint'
  }, {
    image: ph('0b63ff'),
    title: 'Audi RS6 · Diamond Cut',
    cat: 'Wheels'
  }, {
    image: ph('16204a'),
    title: 'Range Rover · Bumper Repair',
    cat: 'Bumpers'
  }, {
    image: ph('1e2126'),
    title: 'Golf GTI · Paint Restoration',
    cat: 'Paint'
  }].filter(g => filter === 'All' || g.cat === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    links: [{
      label: 'Services'
    }, {
      label: 'Gallery'
    }, {
      label: 'Locations'
    }, {
      label: 'About'
    }],
    ctaLabel: "Book now",
    onCta: () => setBookOpen(true)
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '620px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--grid-margin)',
      background: `linear-gradient(0deg,rgba(8,9,11,.75),rgba(8,9,11,.45)),url(${ph('0e1013')}) center/cover`,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '640px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--blue-400)',
      marginBottom: 16
    }
  }, "Precision in every repair."), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-lg)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: '0 0 20px'
    }
  }, "Factory-quality finishes, every time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--silver-200)',
      margin: '0 0 32px',
      maxWidth: 520
    }
  }, "Alloy wheel refurbishment, bumper repairs and paint restoration for luxury, performance and everyday vehicles \u2014 Australia-wide."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setBookOpen(true)
  }, "Book your inspection"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff'
    }
  }, "See the transformation")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px var(--grid-margin)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(TrustBadgeRow, {
    items: [{
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin"
      }),
      label: 'Australian Owned'
    }, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "award"
      }),
      label: 'Premium Quality'
    }, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "shield-check"
      }),
      label: 'Trusted Experts'
    }, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "clock"
      }),
      label: 'Fast Turnaround'
    }, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "handshake"
      }),
      label: 'Honest Pricing'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px var(--grid-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--fw-semibold)',
      margin: '0 0 40px',
      maxWidth: 560
    }
  }, "Everything your car needs to look factory new."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'var(--grid-gutter)'
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement(Card, _extends({
    key: i
  }, s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px var(--grid-margin)',
      background: 'var(--ink-950)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--blue-400)',
      marginBottom: 12
    }
  }, "Before / After"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--fw-semibold)',
      margin: '0 0 40px',
      maxWidth: 560
    }
  }, "Drag to see the difference."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(BeforeAfterSlider, {
    beforeImage: ph('4a4f58'),
    afterImage: ph('0b63ff')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px var(--grid-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Gallery"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--fw-semibold)',
      margin: 0,
      maxWidth: 560
    }
  }, "Recent transformations.")), /*#__PURE__*/React.createElement(Tabs, {
    items: ['All', 'Wheels', 'Bumpers', 'Paint'],
    active: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement(GalleryGrid, {
    items: gallery
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px var(--grid-margin)',
      background: 'var(--cloud-50)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap',
      maxWidth: 1000,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Book a service"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--fw-semibold)',
      margin: '0 0 16px'
    }
  }, "Same-week slots available."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--fg-secondary)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Book a same-week slot, drop off your car, and pick it up looking like it left the factory floor. Mobile pickup available across Sydney, Melbourne and Brisbane.")), /*#__PURE__*/React.createElement(BookingForm, {
    onSubmit: () => setBookOpen(false)
  }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Dialog, {
    open: bookOpen,
    title: "Book your inspection",
    onClose: () => setBookOpen(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setBookOpen(false)
    }, "Confirm")
  }, /*#__PURE__*/React.createElement(BookingForm, {
    onSubmit: () => setBookOpen(false)
  })));
}
window.WCHomepage = WCHomepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BeforeAfterSlider = __ds_scope.BeforeAfterSlider;

__ds_ns.BookingForm = __ds_scope.BookingForm;

__ds_ns.GalleryGrid = __ds_scope.GalleryGrid;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.TrustBadgeRow = __ds_scope.TrustBadgeRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
