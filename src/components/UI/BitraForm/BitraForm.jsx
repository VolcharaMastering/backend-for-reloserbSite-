function BitraForm({ formData, srcToThirdParty }) {
  console.log(formData, srcToThirdParty);
  return (
    <script data-b24-form={formData} data-skip-moving="true">
      {(function (w, d, u) {
        const s = d.createElement("script");
        s.async = true;
        s.src = u + "?" + ((Date.now() / 180000) | 0);
        const h = d.getElementsByTagName("script")[0];
        h.parentNode.insertBefore(s, h);
      })(window, document, srcToThirdParty)}
    </script>
  );
}
export default BitraForm;
