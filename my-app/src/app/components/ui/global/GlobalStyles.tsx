export function GlobalStyles() {
  const styles = `
    /* فقط استایل‌های ضروری که Tailwind نداره */
    ::-webkit-scrollbar{width:12px;height:12px;}
    ::-webkit-scrollbar-thumb{background-color:#888;border-radius:6px;}
    ::-webkit-scrollbar-track{background-color:#f1f1f1;}
    
    /* Dark mode scrollbar */
    .dark ::-webkit-scrollbar-thumb{background-color:#555;}
    .dark ::-webkit-scrollbar-track{background-color:#2d2d2d;}
  `;
  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
}