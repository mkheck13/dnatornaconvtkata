// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases
//  Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
// RNA differs slightly from DNA its chemical structure and contains no Thymine. 
// In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. 
// All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// from what I'm seeing with this kata we need to replace the 'U' with a 'T'
// we should be able to do this with .split() and .join()
function DNAtoRNA(dna){
    return dna.split('T').join('U');
}

// found a differnt way to do it
// could also do .replaceAll()

function DNAtoRNA(dna){
    return dna.replaceAll('T', 'U');
}