export function bufferEncode(str: string) {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'utf8').toString('base64');
  } else if (typeof btoa !== 'undefined' && typeof TextEncoder !== 'undefined') {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  } else {
    throw new Error('Base64 encoding is not supported in this environment.');
  }
}

export function bufferDecode(base64Str: string) {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(base64Str, 'base64').toString('utf8');
  } else if (typeof atob !== 'undefined' && typeof TextDecoder !== 'undefined') {
    const binary = atob(base64Str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
  } else {
    throw new Error('Base64 decoding is not supported in this environment.');
  }
}
