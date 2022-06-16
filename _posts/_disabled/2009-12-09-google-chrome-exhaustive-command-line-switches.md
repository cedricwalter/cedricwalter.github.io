---

title: 'Google Chrome exhaustive command line switches'
date: '2009-12-09T20:56:49+01:00'
author: 'Cédric Walter'



header:
  teaser: /assets/images/2009/12/logogooglechrome_thumb.jpg
tags:
    - google
---

![](/assets/images/2009/12/logogooglechrome_thumb.jpg)

# Google Chrome Command Line Switches

 While a lot of them are not interesting for the casual user, some are really interesting for us developers. I put at the top the most interesting one in bold, aka the one I use always.

From the source file chrome\_switches.cc at [http://src.chromium.org/svn/trunk/src/chrome/common/chrome\_switches.cc](http://src.chromium.org/svn/trunk/src/chrome/common/chrome_switches.cc) The list of switches is evolving so consider looking at source code to check for changes. Right click on Google Chrome desktop icon and use properties

| –enable-sync | Enable syncing bookmarks to a Google Account. |
|---|---|
| –incognito | Causes the browser to launch directly in incognito mode. |
| –disable-hang-monitor | Suppresses hang monitor dialogs in renderer processes. |
| –disable-metrics | Completely disables UMA metrics system. |
| –disable-metrics-reporting | Disables only the sending of metrics reports. In contrast to    kDisableMetrics, this executes all the code that a normal client would use    for reporting, except the report is dropped rather than sent to the server.    This is useful for finding issues in the metrics code during UI and    performance tests. |
| –assert-test | Causes the browser process to throw an assertion on startup. |
| –renderer-assert-test | Causes the renderer process to throw an assertion on launch. |
| –crash-test | Causes the browser process to crash on startup. |
| –renderer-crash-test | Causes the renderer process to crash on launch. |
| –renderer-startup-dialog | Causes the renderer process to display a dialog on launch. |
| –plugin-startup-dialog | Causes the plugin process to display a dialog on launch. |
| –testshell-startup-dialog | Causes the test shell process to display a dialog on launch. |
| –plugin-launcher="path\\to\\purify /Run=yes"    –plugin-launcher | Specifies a command that should be used to launch the plugin process. Useful    for running the plugin process through purify or quantify. |
| –channel | The value of this switch tells the child process which    IPC channel the browser expects to use to communicate with it. |
| –testing-channel | The value of this switch tells the app to listen for and broadcast    testing-related messages on IPC channel with the given ID. |
| –homepage | The value of this switch specifies which page will be displayed    in newly-opened tabs. We need this for testing purposes so    that the UI tests don’t depend on what comes up for <http://google.com>. |
| –start-renderers-manually | When this switch is present, the browser will throw up a dialog box    asking the user to start a renderer process independently rather    than launching the renderer itself. (This is useful for debugging.) |
| –renderer | Causes the process to run as renderer instead of as browser. |
| –renderer-path | Path to the exe to run for the renderer subprocess |
| –plugin | Causes the process to run as plugin host |
| –single-process | Runs the renderer and plugins in the same process as the browser |
| –process-per-tab | Runs each set of script-connected tabs (i.e., a BrowsingInstance) in its own    renderer process. We default to using a renderer process for each    site instance (i.e., group of pages from the same registered domain with    script connections to each other). |
| –process-per-site | Runs a single process for each site (i.e., group of pages from the same    registered domain) the user visits. We default to using a renderer process    for each site instance (i.e., group of pages from the same registered    domain with script connections to each other). |
| –in-process-plugins | Runs plugins inside the renderer process |
| –no-sandbox | Runs the renderer outside the sandbox. |
| –safe-plugins | Runs the plugin processes inside the sandbox. |
| –trusted-plugins | Excludes these plugins from the plugin sandbox.    This is a comma separated list of plugin dlls name and activex clsid. |
| –test-sandbox | Runs the security test for the sandbox. |
| –user-data-dir | Specifies the user data directory, which is where the browser will look    for all of its state. |
| –app | Specifies that the associated value should be launched in "application" mode. |
| –upload-file | Specifies the file that should be uploaded to the provided application. This    switch is expected to be used with –app option. |
| –dom-automation | Specifies if the dom\_automation\_controller\_ needs to be bound in the    renderer. This binding happens on per-frame basis and hence can potentially    be a performance bottleneck. One should only enable it when automating    dom based tests. |
| –plugin-path | Tells the plugin process the path of the plugin to load |
| –js-flags | Specifies the flags passed to JS engine |
| –geoid | The GeoID we should use. This is normally obtained from the operating system    during first run and cached in the preferences afterwards. This is a numeric    value; see <http://msdn.microsoft.com/en-us/library/ms776390.aspx> . |
| –lang | The language file that we want to try to open. Of the form    language\[-country\] where language is the 2 letter code from ISO-639. |
| –debug-children | Will add kDebugOnStart to every child processes. If a value is passed, it    will be used as a filter to determine if the child process should have the    kDebugOnStart flag passed on or not. |
| –wait-for-debugger-children | Will add kWaitForDebugger to every child processes. If a value is passed, it    will be used as a filter to determine if the child process should have the    kWaitForDebugger flag passed on or not. |
| –log-filter-prefix | Will filter log messages to show only the messages that are prefixed    with the specified value |
| –enable-logging | Force logging to be enabled. Logging is disabled by default in release    builds. |
| –disable-logging | Force logging to be disabled. Logging is enabled by default in debug    builds. |
| –log-level | Sets the minimum log level. Valid values are from 0 to 3:    INFO = 0, WARNING = 1, LOG\_ERROR = 2, LOG\_FATAL = 3. |
| –dump-histograms-on-exit | Dump any accumualted histograms to the log when browser terminates (requires    logging to be enabled to really do anything). Used by developers and test    scripts. |
| –remote-shell-port | enable remote debug / automation shell on the specified port |
| –uninstall | Runs un-installation steps that were done by chrome first-run. |
| –omnibox-popup-count | Number of entries to show in the omnibox popup. |
|  |  |
| –automation-channel | The value of this switch tells the app to listen for and broadcast    automation-related messages on IPC channel with the given ID. |
| –restore-last-session | Indicates the last session should be restored on startup. This overrides    the preferences value and is primarily intended for testing. |
| –record-mode    –playback-mode | Chrome supports a playback and record mode. Record mode saves \*everything\*    to the cache. Playback mode reads data exclusively from the cache. This    allows us to record a session into the cache and then replay it at will. |
| –no-events | Don’t record/playback events when using record &amp; playback. |
| –hide-icons    –show-icons | Make Windows happy by allowing it to show "Enable access to this program"    checkbox in Add/Remove Programs->Set Program Access and Defaults. This    only shows an error box because the only way to hide Chrome is by    uninstalling it. |
| –make-default-browser | Make Chrome default browser |
| –proxy-server | Use a specified proxy server, overrides system settings. This switch only    affects HTTP and HTTPS requests. |
| –dns-log-details    –dns-prefetch-disable | Chrome will support prefetching of DNS information. Until this becomes    the default, we’ll provide a command line switch. |
| –debug-print | Enables support to debug printing subsystem. |
| –allow-all-activex | Allow initialization of all activex controls. This is only to help website    developers test their controls to see if they are compatible in Chrome.    Note there’s a duplicate value in activex\_shared.cc (to avoid    dependency on chrome module). Please change both locations at the same time. |
| –disable-dev-tools | Browser flag to disable the web inspector for all renderers. |
| –always-enable-dev-tools | Enable web inspector for all windows, even if they’re part of the browser.    Allows us to use our dev tools to debug browser windows itself. |
| –tab-count-to-load-on-session-restore | Used to set the value of SessionRestore::num\_tabs\_to\_load\_. See    session\_restore.h for details.    const wchar\_t kTabCountToLoadOnSessionRestore\[\] = |
| –memory-profile | Enable dynamic loading of the Memory Profiler DLL, which will trace    all memory allocations during the run. |
| –memory-model | Configure Chrome’s memory model.    Does chrome really need multiple memory models? No. But we get a lot    of concerns from individuals about how the changes work on \*their\*    system, and we need to be able to experiment with a few choices. |
| –enable-file-cookies | By default, cookies are not allowed on file://. They are needed in for    testing, for example page cycler and layout tests. See bug 1157243. |
| –start-maximized | Start the browser maximized, regardless of any previous settings.    TODO(pjohnson): Remove this once bug 1137420 is fixed. We are using this    as a workaround for not being able to use moveTo and resizeTo on a    top-level window. |
| –enable-watchdog | Spawn threads to watch for excessive delays in specified message loops.    User should set breakpoints on Alarm() to examine problematic thread.    Usage: -enable-watchdog=\[ui\]\[io\]    Order of the listed sub-arguments does not matter. |
| –first-run | Display the First Run experience when the browser is started, regardless of    whether or not it’s actually the first run. |
| –message-loop-histogrammer | Enable histograming of tasks served by MessageLoop. See about:histograms/Loop    for results, which show frequency of messages on each thread, including APC    count, object signalling count, etc. |
| –import | Perform importing from another browser. The value associated with this    setting encodes the target browser and what items to import. |
| –silent-dump-on-dcheck | Change the DCHECKS to dump memory and continue instead of crashing.    This is valid only in Release mode when –enable-dcheck is specified. |
| –disable-prompt-on-repost | Normally when the user attempts to navigate to a page that was the result of    a post we prompt to make sure they want to. This switch may be used to    disable that check. This switch is used during automated testing. |
| –disable-popup-blocking | Disable pop-up blocking. |
| –disable-javascript | Don’t execute JavaScript (browser JS like the new tab page still runs). |
| –disable-java | Prevent Java from running. |
| –disable-plugins | Prevent plugins from running. |
| –disable-images | Prevent images from loading. |
| –use-lf-heap | Use the low fragmentation heap for the CRT. |
| –gears-plugin-path | Debug only switch to specify which gears plugin dll to load. |
| –gears-in-renderer | Switch to load Gears in the renderer process. |
| –new-http | Enable new HTTP stack. |
| –javascript-debugger-path | Allow loading of the javascript debugger UI from the filesystem. |
| –enable-p13n |  |