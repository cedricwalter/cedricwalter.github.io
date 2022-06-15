---
id: 1111
title: 'Service pack 2 et le P2P'
date: '2004-09-05T23:34:34+02:00'
author: 'Cédric Walter'



tags:
    - internet
    - technology
---

Avec son SP2, Microsoft a souhaitÃ© s'attaquer au problÃ¨me des vers qui inondent les PC de requÃªtes pour se diffuser le plus rapidement possible. L'une des solutions apportÃ©es fut de limiter le nombre de demandes de connexions simultanÃ©es en TCP Ã 10. Ce qui est idiot comme solution: c'est un HACK qui montre une faiblesse technique, technologique et de savoir faire de la part de microsoft. En effet, la 1 er hose qui se fera est que les vers vont changer cette valeur pour vous sans vous le dire et ensuite se dupliquer….

 Avec les technologies employÃ©es par nombre de logiciels de P2P, cette limitation est la plupart du temps trop basse pour les utilisateurs de ligne Ã haut-dÃ©bit. Les utilisateurs de logiciels comme eDonkey ou eMule voient leurs tÃ©lÃ©chargement largement freinÃ©s par cette mise Ã jour de sÃ©curitÃ©.null

 Il faut se rendre Ã cet endroit de la base de registre :  
 HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters

 Et ajouter une clÃ© tye DWORD intitulÃ©e "TcpNumConnections". En y mettant une valeur hexadÃ©cimale de "fffffe", le nombre de tentatives de connexions simultanÃ©es devient virtuellement illimitÃ© (en fait limitÃ© Ã 16.777.214).