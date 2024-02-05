export default async function GET() {

    const URL_SERVER = "http://18.213.254.148:3000/";
    try {
        const response = await fetch(URL_SERVER + "articulos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
