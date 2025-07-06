import React from 'react';

/** Injects global CSS resets and common styles */
export function GlobalStyles() {
  const styles = `
    /* normalize-like resets */
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html,body{height:100%;}
    body{font-family:var(--font-family,sans-serif);line-height:1.5;background:var(--bg-color,#fff);color:var(--text-color,#111);} 
    ::-webkit-scrollbar{width:12px;height:12px;}
    ::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb,#888);border-radius:6px;}
    ::-webkit-scrollbar-track{background-color:var(--scrollbar-track,#f1f1f1);}
  `;
  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
}
