// from https://www.materialui.co/colors

var map = new Object();

map['PoW'] = '#d50000';
map['PoW/PoS'] = '#f44336';
map['PoW/PoZ'] = '#ef9a9a';
map['PoW/DPoW'] = '#e57373';
map['PoWT'] = '#ef5350';
map['PoW/HiPoS'] = '#f44336';
map['PoW/nPoS'] = '#e53935';
map['PoW/PoSC'] = '#d32f2f';
map['dPoW/PoW'] = '#c62828';
map['HPoW'] = '#b71c1c';
map['PoW/PoM/PoSII'] = '#ff8a80';
map['PoW/PoS/PoC'] = '#ff5252';

map['PoS'] = '#2196F3';
map['PoS/PoB'] = '#BBDEFB';
map['PoS/PoD'] = '#90CAF9';
map['PoS/PoP'] = '#64B5F6';
map['PoS/PoW'] = '#42A5F5';
map['DPoS'] = '#2196F3';
map['LPoS'] = '#1E88E5';
map['PoST'] = '#1976D2';
map['TPoS'] = '#1565C0';
map['DPoS/LPoS'] = '#0D47A1';
map['PoS/PoW/PoT'] = '#82B1FF';
map['PoS/LPoS'] = '#448AFF';

map['Tangle'] = '#9C27B0';

map['PoI'] = '#673AB7';

map['Proof of Ownership'] = '#3F51B5';


map['LFT'] = '#E91E63';

map['PoA'] = '#03A9F4';

map['PoC'] = '#00BCD4';

map['PoSign'] = '#009688';

map['PoP'] = '#4CAF50';

map['PoPP'] = '#8BC34A';

map['Scrypt-adaptive-N (ASIC resistant)'] = '#FFD54F';

map['FBA'] = '#FF8A65';
map['mFBA'] = '#FF8A65';
map['PBFT'] = '#FF8A65';
map['dBFT'] = '#FF8A65';

map['Limited Confidence Proof-of-Activity'] = '#795548';

map['PoP/PoV/PoQ'] = '#607D8B';

map['PoR'] = '#FF9800';
map['DPoR'] = '#FFE0B2';

map['PoB'] = '#FFEB3B';
map['POBh'] = '#FFF9C4';
map['PoB/PoS'] = '#FFF59D';

map['N/A'] = '#90A4AE';

map['Proof of Time'] = '#FFC107';

map['Proof of Existence'] = '#FF5722';

map['Ouroboros'] = '#CDDC39';

map['Proof of Believability'] = '#7986CB';

// not used yet
map['PoET'] = '#e57373';
map['Raft'] = '#4DB6AC';
map['Other'] = '#9E9E9E';

map['Infrastructure'] = '#F06292';
map['Tourism'] = '#BA68C8';

map['Legal'] = '#64B5F6';
map['Casino'] = '#4FC3F7';
map['Casino'] = '#4DD0E1';

map['Casino'] = '#81C784';
map['Casino & Gambling'] = '#AED581';
map['Casino'] = '#DCE775';
map['Education'] = '#FFF176';

map['Casino'] = '#A1887F';
map['Casino'] = '#E0E0E0';

function getColor(k) {
    return map[k];
}