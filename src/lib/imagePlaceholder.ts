import fs from 'fs/promises';
import { getPlaiceholder } from 'plaiceholder';

export async function generateLocalBlurDataURL(src: string): Promise<string> {
	try {
		const file = await fs.readFile(src);
		const { base64 } = await getPlaiceholder(file);
		return base64;
	} catch (error) {
		return '';
	}
}

export async function generateRemoteBlurDataURL(src: string): Promise<string> {
	try {
		const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
		const { base64 } = await getPlaiceholder(buffer);
		return base64;
	} catch (error) {
		return '';
	}
}
