rfiddleHelper
=============

A helper jQuery script to convert the pre tags in your blog to r fiddles.

All <code>&lt;pre class=&quot;rfiddle&quot;&gt;&lt;/pre&gt;</code> tags will be replaced with the non-interactive fiddle. <br />
All <code>&lt;pre class=&quot;rfiddle-interactive&quot;&gt;&lt;/pre&gt;</code> tags will be replaced with the interactive fiddle.

The height of the fiddle will change depending on the size of the code entered, but you can override this by passing a height attribute: <br />
<code>&lt;pre class=&quot;rfiddle&quot; style=&quot;height:700px&quot;&gt;</code>

Dependency
=============
This script depends on jQuery.


Installation
=============
Include this script in your blog, after you have included jQuery. For every <code>&lt;pre&gt;</code> tag that you want to convert to a fiddle, you have to add the class "rfiddle" or "rfiddle-interactive".
