package com.karan.config;

public class CaesarCipher {

    // Encrypts text using a Caesar cipher with a given shift value
    public static String encrypt(String text, int shift) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);

            if (Character.isLetter(ch)) {
                char shifted = (char) ('A' + (Character.toUpperCase(ch) - 'A' + shift) % 26);
                if (Character.isLowerCase(ch))
                    shifted = Character.toLowerCase(shifted);
                result.append(shifted);
            } else {
                result.append(ch);
            }
        }

        return result.toString();
    }

}
