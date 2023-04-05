import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7873730996266!2d106.71885281570722!3d10.827577492286801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529bf21c641a9%3A0x6a10535079e9b609!2sSense%20City%20Pham%20Van%20Dong!5e0!3m2!1sen!2sus!4v1680711428961!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="HCM city, VN" />
        <MyInfo field="email" value="vn.hoinv98@gmail.com" />
        <MyInfo field="phone" value="+84 389457027" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  );
}
