/** @type {import('next').NextConfig} */
const nextConfig = {
	images:{
	  remotePatterns:[
		{
		  protocol: "https",
		  hostname: "i.gyazo.com",
		},
		{
		  protocol: "https",
		  hostname: "dummyimage.com",
		},
		{
		  protocol: "https",
		  hostname: "images.unsplash.com",
		},
		{
		  protocol: "https",
		  hostname: "img.youtube.com",
		}
	  ]
	}
};

export default nextConfig;