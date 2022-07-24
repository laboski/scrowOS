class ImageOptimizer{

	constructor(image, type. max = 400)
	{
		this.image = image;
		this.max   = max;
		this.type   = type;
	}

	process()
	{
		if (! this.image) return;

		const reader = new FileReader();
		reader.readAsDataURL(this.image);

		reader.onload = (event) =>{
			const imgelement = document.createElement("img");
			imgelement.src = event.target.result;
			
			imgelement.onload = (e) => {
				const canvas = document.createElement("canvas");

				let scalesize = this.max / e.target.width;
				canvas.width = this.max;
				canvas.height = e.target.height * scalesize;

				const ctx = canvas.getContext("2d");
				ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
				const srcEncoded = ctx.canvas.toDataURL(e.target, this.type);

				document.getElementById("output").src = srcEncoded;
			}
		}
	}
}

document.getElementById("btn").addEventListener('click', () => {
	const optimizer = new ImageOptimizer(document.getElementById("upload").files[0], 'image/jpeg');
	optimizer.process();
})