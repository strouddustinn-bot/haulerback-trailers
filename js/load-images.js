document.querySelectorAll('img[data-b64]').forEach(async (img)=>{
  try{
    const r=await fetch(img.getAttribute('data-b64'));
    const t=await r.text();
    img.src='data:image/jpeg;base64,'+t.trim();
  }catch(e){console.warn('image load failed',e)}
});
