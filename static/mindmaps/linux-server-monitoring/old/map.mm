<map version="1.0.1">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node COLOR="#000000" CREATED="1299445301144" ID="ID_716643743" MODIFIED="1360271759033">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      <font size="5">&#160;Linux server Monitoring </font>v 1.0.0<br />copyright 2010 - 2013 www.waltercedric.com &#160;<br />&quot;You can't correct something you can't measure&quot;<br /><font size="1.2em" face="Helvetica, Arial, sans-serif" color="rgb(38, 88, 163)"><a style="border-top-style: none; color: rgb(38, 88, 163); border-right-width: 0px; border-left-width: 0px; margin-left: 0px; margin-right: 0px; border-bottom-style: none; padding-bottom: 0px; letter-spacing: normal; border-bottom-width: 0px; padding-right: 0px; margin-bottom: 0px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; padding-left: 0px; background-repeat: repeat; text-align: left; font-style: normal; background-color: rgb(255, 255, 255); text-decoration: none; border-top-width: 0px; white-space: normal; background-position: initial initial; margin-top: 0px; text-indent: 0px; border-left-style: none; font-variant: normal; font-size: 1.2em; line-height: 1.8em; padding-top: 0px; text-transform: none; border-right-style: none; word-spacing: 0px" href="http://linux-server-monitoring.waltercedric.com/">http://linux-server-monitoring.waltercedric.com</a></font><br />
    </p>
  </body>
</html>
</richcontent>
<edge COLOR="#000000" WIDTH="8"/>
<node COLOR="#0033ff" CREATED="1300037474003" ID="ID_1739223586" MODIFIED="1360271759034" POSITION="right" TEXT="Why">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<icon BUILTIN="full-1"/>
<node COLOR="#00b439" CREATED="1300037494933" ID="ID_1030578643" MODIFIED="1360271759035" TEXT="its critical to know what is going on">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037543582" ID="ID_1069517222" MODIFIED="1360271759035" TEXT="take preventive action">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037551681" ID="ID_684266708" MODIFIED="1360271759036" TEXT="perform maintenance upfront">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300037376825" ID="ID_1175545168" MODIFIED="1360271759044" POSITION="right" TEXT="What to monitor">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<icon BUILTIN="full-2"/>
<node COLOR="#00b439" CREATED="1300037382442" ID="ID_490583823" MODIFIED="1360271759044" TEXT="CPU utilization">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037407404" ID="ID_295753102" MODIFIED="1360271759045" TEXT="Server RAM">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037415563" ID="ID_235539807" MODIFIED="1360271759045" TEXT="Bandwidth usage">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037422679" ID="ID_1833413878" MODIFIED="1360271759046" TEXT="Disk space usage">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037440064" ID="ID_795392616" MODIFIED="1360271759046" TEXT="Physical temperature">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300037443673" ID="ID_954976393" MODIFIED="1360271759047" TEXT="Logs files">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300037271244" ID="ID_1494068651" MODIFIED="1360271759053" POSITION="right" TEXT="Useful Bash Commands">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300037283087" ID="ID_213703450" MODIFIED="1360271759056" TEXT="top">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300037298265" ID="ID_1640726077" MODIFIED="1360271759060" TEXT="Top will show you memory usage, number of users logged in, load averages, CPU consumption, total uptime, virtual memory, and how long each process has been running.">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1300038704479" ID="ID_1517829508" MODIFIED="1360271759068">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      <font size="3" face="Arial, Helvetica Neue, Helvetica, sans-serif" color="rgb(17, 17, 17)">htop is an enhanced version of top, the interactive process viewer, which can display the list of processes in a tree fo</font>rm
    </p>
  </body>
</html>
</richcontent>
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300037309844" ID="ID_5083710" MODIFIED="1360271759071" TEXT="ps aux">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300037327873" ID="ID_1138946846" MODIFIED="1360271759071" TEXT="list of every process running, the user running it, and even what action it is taking">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300037982271" ID="ID_492638404" MODIFIED="1360271759072" TEXT="vmstat">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300037760340" ID="ID_1038775692" MODIFIED="1360271759073" TEXT="vmstat - System Activity, Hardware and System Information">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1300037818363" ID="ID_1836531188" MODIFIED="1360271759073" TEXT="vmstat 3">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
<node COLOR="#111111" CREATED="1300037790923" ID="ID_444444147" MODIFIED="1360271759073" TEXT="return information about processes, memory, paging, block IO, traps, and cpu activity.">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
<node COLOR="#990000" CREATED="1300037991939" ID="ID_1200142855" MODIFIED="1360271759074" TEXT="vmstat -m">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
<node COLOR="#111111" CREATED="1300038002419" ID="ID_1905284767" MODIFIED="1360271759074" TEXT="Display Memory Utilization">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038013031" ID="ID_952473128" MODIFIED="1360271759075" TEXT="w">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038033691" ID="ID_303828350" MODIFIED="1360271759075" TEXT="who is logged in  and what they are doing">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038069852" ID="ID_1370963958" MODIFIED="1360271759076" TEXT="uptime">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038081762" ID="ID_210125551" MODIFIED="1360271759076" TEXT="return how long the system is running">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038134114" ID="ID_347899288" MODIFIED="1360271759077" TEXT="ps">
<edge COLOR="#00b439" WIDTH="2"/>
<arrowlink DESTINATION="ID_347899288" ENDARROW="Default" ENDINCLINATION="0;0;" ID="Arrow_ID_57394512" STARTARROW="None" STARTINCLINATION="0;0;"/>
<linktarget COLOR="#b0b0b0" DESTINATION="ID_347899288" ENDARROW="Default" ENDINCLINATION="0;0;" ID="Arrow_ID_57394512" SOURCE="ID_347899288" STARTARROW="None" STARTINCLINATION="0;0;"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038167842" ID="ID_317988059" MODIFIED="1360271759077" TEXT="Display all processes running">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1300038140163" ID="ID_796572297" MODIFIED="1360271759078" TEXT="ps axjf">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
<node COLOR="#990000" CREATED="1300038217707" ID="ID_1539989064" MODIFIED="1360271759078" TEXT="ps -p pid  -o comm=">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
<node COLOR="#111111" CREATED="1300038230794" ID="ID_1031264276" MODIFIED="1360271759079" TEXT="display the process name with pid = pid">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
<node COLOR="#990000" CREATED="1300038255357" ID="ID_782328266" MODIFIED="1360271759080" TEXT="ps -auxf | sort -nr -k 4 | head -10">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
<node COLOR="#111111" CREATED="1300038260491" ID="ID_1298275335" MODIFIED="1360271759081" TEXT="return the 10 most consuming memory processes">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
<node COLOR="#990000" CREATED="1300038281451" ID="ID_833017297" MODIFIED="1360271759081" TEXT="ps -auxf | sort -nr -k 3 | head -10">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
<node COLOR="#111111" CREATED="1300038287538" ID="ID_1851034165" MODIFIED="1360271759082" TEXT="return the 10 most consuming cpu processes">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038309162" ID="ID_77609261" MODIFIED="1360271759082" TEXT="free">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038321715" ID="ID_1632588646" MODIFIED="1360271759083" TEXT="displays the total amount of free and used physical and swap memory">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038396731" ID="ID_948359708" MODIFIED="1360271759084" TEXT="iostat">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038407642" ID="ID_1822767649" MODIFIED="1360271759088" TEXT="display Central Processing Unit (CPU) statistics and input/output statistics for devices, partitions and network filesystems (NFS)">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038535585" ID="ID_1247859528" MODIFIED="1360271759089" TEXT="mpstat">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038545098" ID="ID_1055905364" MODIFIED="1360271759090" TEXT="Displays activities for each available processor, processor 0 being the first one">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1300038555242" ID="ID_24799450" MODIFIED="1360271759090" TEXT="mpstat -P ALL">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038606641" ID="ID_537532912" MODIFIED="1360271759091" TEXT="proc">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038616240" ID="ID_1400680977" MODIFIED="1360271759093">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      <font face="Consolas, Andale Mono, Monaco, Courier, Courier New, Verdana, sans-serif" color="rgb(17, 17, 17)">cat /proc/cpuinfo</font><br /><font face="Consolas, Andale Mono, Monaco, Courier, Courier New, Verdana, sans-serif" color="rgb(17, 17, 17)">cat /proc/meminfo</font><br /><font face="Consolas, Andale Mono, Monaco, Courier, Courier New, Verdana, sans-serif" color="rgb(17, 17, 17)">cat /proc/zoneinfo </font>
    </p>
  </body>
</html>
</richcontent>
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300037607785" ID="ID_149674828" MODIFIED="1360271759094" POSITION="left" TEXT="Bandwidth usage">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300037619354" ID="ID_137748955" MODIFIED="1360271759094" TEXT="Webalizer">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300037640508" ID="ID_285180265" MODIFIED="1360271759097" POSITION="right" TEXT="Tools">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300037645064" ID="ID_1984179131" MODIFIED="1360271759098" TEXT="Nagios ">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038672279" ID="ID_1821689943" MODIFIED="1360271759102" TEXT="Nagios is a popular open source computer system and network monitoring application software. You can easily monitor all your hosts, network equipment and services. ">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300037174463" ID="ID_507924624" MODIFIED="1360271759104" TEXT="delayed">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300037194238" ID="ID_954372948" MODIFIED="1360271759105" TEXT="Munin">
<edge COLOR="#990000" WIDTH="1"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#111111" CREATED="1300037197784" ID="ID_1538333564" MODIFIED="1360271759111" TEXT="Easy monitoring your Linux server from web browserMunin creates graphs for just about everything going on in your system">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
<node COLOR="#111111" CREATED="1300037244903" ID="ID_385038696" MODIFIED="1360271759112" TEXT="run every 5 minutes">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
<node COLOR="#990000" CREATED="1300037233143" ID="ID_940947363" MODIFIED="1360271759113" TEXT="online services">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300038859205" ID="ID_1802402921" MODIFIED="1360271759114" POSITION="left" TEXT="Login">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300038866646" ID="ID_1285405877" MODIFIED="1360271759225" TEXT="check for empty user password">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300038877623" ID="ID_846439716" MODIFIED="1360271759226" TEXT="awk -F: &apos;($2 == &quot;&quot;) {print}&apos; /etc/shadow">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038900968" ID="ID_839920167" MODIFIED="1360271759226" TEXT="Lock an account">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300038906425" ID="ID_285349485" MODIFIED="1360271759227" TEXT="passwd -l accountName">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038930485" ID="ID_181434650" MODIFIED="1360271759229">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    Only root have uid = 0 check account that may act like root
  </body>
</html>
</richcontent>
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300038972366" ID="ID_909782066" MODIFIED="1360271759229" TEXT="awk -F: &apos;($3 == &quot;0&quot;) {print}&apos; /etc/passwd">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300039064881" ID="ID_1937032588" MODIFIED="1360271759231" POSITION="left" TEXT="Services">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300039077123" ID="ID_366840396" MODIFIED="1360271759233">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    List all services that are autostarted at boot time
  </body>
</html>
</richcontent>
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300039091763" ID="ID_596321670" MODIFIED="1360271759234">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    apt-get install chkconfig chkconfig --list | grep '3:on'
  </body>
</html>
</richcontent>
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300039184282" ID="ID_1500593953" MODIFIED="1360271759235" TEXT="Stop unwanted services">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300039189441" ID="ID_1580630641" MODIFIED="1360271759236" TEXT="service serviceName stop">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300039260968" ID="ID_1236153009" MODIFIED="1360271759236" POSITION="left" TEXT="Network">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300039277183" ID="ID_962518562" MODIFIED="1360271759237" TEXT="list all open ports and associated programs">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300039284964" ID="ID_1274767776" MODIFIED="1360271759237" TEXT="netstat -tulpn">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
<node COLOR="#990000" CREATED="1300039309566" ID="ID_1807634148" MODIFIED="1360271759238" TEXT="nmap -sT -O localhost">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300038730719" ID="ID_410763046" MODIFIED="1360271759238" TEXT="lsof">
<edge COLOR="#00b439" WIDTH="2"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#990000" CREATED="1300038734643" ID="ID_1882040625" MODIFIED="1360271759239" TEXT="list open files, network connections and much more">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1351696535327" ID="ID_273731490" MODIFIED="1360271759239" TEXT="to find the pid of process listening to the TCP port 8080">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1351696523226" ID="ID_778677565" MODIFIED="1360271759240" TEXT="lsof -w -n -i tcp:8080">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1351701646836" ID="ID_1430796482" MODIFIED="1360271759240" TEXT="fuser -n tcp 8080">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1351701666724" ID="ID_510329053" MODIFIED="1360271759241" TEXT="netstat -anp|grep :8080">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300039453927" ID="ID_1218959709" MODIFIED="1360271759241" POSITION="left" TEXT="Files system">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300039457407" ID="ID_273322689" MODIFIED="1360271759242" TEXT="Find world writable files">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300039463649" ID="ID_257018142" MODIFIED="1360271759242" TEXT="find / -xdev -type d \( -perm -0002 -a ! -perm -1000 \) -print">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300039488488" ID="ID_1605469330" MODIFIED="1360271759243" TEXT="find files with no owner">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300039494627" ID="ID_149793575" MODIFIED="1360271759243" TEXT="find / -xdev \( -nouser -o -nogroup \) -print">
<edge COLOR="#990000" WIDTH="1"/>
<icon BUILTIN="pencil"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1299445318696" ID="ID_24241226" MODIFIED="1360271759246" POSITION="left" TEXT="Log Files">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1299445326115" ID="ID_361162448" MODIFIED="1360271759247" TEXT="Login attempts">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1299445338196" ID="ID_811332463" MODIFIED="1360271759248" TEXT="/var/log/auth">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1299445348417" ID="ID_1398685485" MODIFIED="1360271759248" TEXT="fail or success">
<edge COLOR="#990000" WIDTH="1"/>
</node>
<node COLOR="#990000" CREATED="1299445358897" ID="ID_1463131840" MODIFIED="1360271759250">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      If too much failed attempts in log fil&#160;-&gt; may be hacker brute forcing login
    </p>
  </body>
</html>
</richcontent>
<edge COLOR="#990000" WIDTH="1"/>
<node COLOR="#111111" CREATED="1299445377816" ID="ID_1759666165" MODIFIED="1360271759251" TEXT="block with IPTable">
<edge COLOR="#111111" WIDTH="thin"/>
</node>
<node COLOR="#111111" CREATED="1299445389055" ID="ID_1046005021" MODIFIED="1360271759253">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    block with fail2ban

    <p>
      apt-get install fail2ban
    </p>
  </body>
</html>
</richcontent>
<edge COLOR="#111111" WIDTH="thin"/>
</node>
</node>
</node>
<node COLOR="#00b439" CREATED="1300041269919" ID="ID_1159038034" MODIFIED="1360271759253" TEXT="Interesting log files">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300041284878" ID="ID_1440211542" MODIFIED="1360271759259" TEXT="/var/log/kern.log: Kernel logs &#xa;/var/log/message: General message &#xa;/var/log/auth.log: Authentification logs &#xa;/var/log/mysqld.log: MySQL database server log file &#xa;/var/log/cron.log: Cronjob logs &#xa;/var/log/qmail/ : Qmail log directory &#xa;/var/log/maillog: Mail server logs &#xa;/var/log/httpd/ or&#xa0;&#xa0;/var/log/apache2/:&#xa0;&#xa0;&#xa0;Apache &#xa;/var/log/boot.log : System boot log &#xa;/var/log/secure: Authentication log">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
</node>
<node COLOR="#0033ff" CREATED="1300044178744" ID="ID_934662278" MODIFIED="1360271759261" POSITION="left" TEXT="/proc">
<edge COLOR="#0033ff" WIDTH="4"/>
<font BOLD="true" NAME="SansSerif" SIZE="12"/>
<node COLOR="#00b439" CREATED="1300044191278" ID="ID_1443639700" MODIFIED="1360271759262" TEXT="The proc filesystem is a special filesystem found on most UNIX-based systems.">
<edge COLOR="#00b439" WIDTH="2"/>
</node>
<node COLOR="#00b439" CREATED="1300044207919" ID="ID_477554543" MODIFIED="1360271759262" TEXT="cat /proc/[pid]/cmdline">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300044217655" ID="ID_1298335100" MODIFIED="1360271759263" TEXT="Contains the command line used to launch the process.">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300044262871" ID="ID_1143671823" MODIFIED="1360271759263" TEXT="cat /proc/cpuinfo">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300044256394" ID="ID_1305253135" MODIFIED="1360271759266" TEXT="processor related information, such as the architecture, frequency and amount of cache found on the cpu. /proc/filesystems">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
<node COLOR="#00b439" CREATED="1300044293710" ID="ID_1227087378" MODIFIED="1360271759268" TEXT="cat /proc/cmdline">
<edge COLOR="#00b439" WIDTH="2"/>
<node COLOR="#990000" CREATED="1300044303907" ID="ID_228297474" MODIFIED="1360271759268" TEXT="Contains all the arguments passed to the kernel at boot tim">
<edge COLOR="#990000" WIDTH="1"/>
</node>
</node>
</node>
</node>
</map>
