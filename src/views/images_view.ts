import Image from "../models/Image";

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `${process.env.API_URL}/uploads/${image.path}`
        };
    },

    renderMany(images : Image[]) {
        if(!images) {
            return []
        }
        return images.map(image => this.render(image));
    }
};