// Script para manejar rutas relativas al base path
document.addEventListener('DOMContentLoaded', function() {
  const basePath = document.querySelector('meta[name="base-path"]')?.getAttribute('content') || '/';
  
  // Función para corregir rutas relativas
  function fixRelativePaths() {
    // Corregir enlaces internos
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      if (!link.getAttribute('href').startsWith(basePath) && !link.getAttribute('href').startsWith('//')) {
        link.setAttribute('href', basePath + link.getAttribute('href').substring(1));
      }
    });
    
    // Corregir imágenes
    document.querySelectorAll('img[src^="/"]').forEach(img => {
      if (!img.getAttribute('src').startsWith(basePath) && !img.getAttribute('src').startsWith('//')) {
        img.setAttribute('src', basePath + img.getAttribute('src').substring(1));
      }
    });
    
    // Corregir estilos inline con url()
    document.querySelectorAll('[style*="url("]').forEach(el => {
      const style = el.getAttribute('style');
      if (style && style.includes('url("/')) {
        const newStyle = style.replace(/url\("\/(.*?)"\)/g, `url("${basePath}$1")`);
        el.setAttribute('style', newStyle);
      }
    });
    
    // Corregir CSS generado dinámicamente
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const cssRules = styleSheets[i].cssRules || styleSheets[i].rules;
        if (cssRules) {
          for (let j = 0; j < cssRules.length; j++) {
            const rule = cssRules[j];
            if (rule.style && rule.style.cssText.includes('url("/')) {
              rule.style.cssText = rule.style.cssText.replace(/url\("\/(.*?)"\)/g, `url("${basePath}$1")`);
            }
          }
        }
      } catch (e) {
        // Error de CORS al acceder a hojas de estilo de otro dominio, lo ignoramos
        console.log('No se pudo acceder a una hoja de estilo externa');
      }
    }
  }
  
  // Ejecutar la corrección
  fixRelativePaths();
  
  // También corregir después de cargar la página completamente
  window.addEventListener('load', fixRelativePaths);
  
  // Corregir después de cambios en el DOM (para componentes dinámicos)
  const observer = new MutationObserver(fixRelativePaths);
  observer.observe(document.body, { childList: true, subtree: true });
});
