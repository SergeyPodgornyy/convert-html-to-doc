Convert HTML to DOC
===================

This application will convert HTML inserted in form to DOC

## Adding PHP extensions

You need to enable PHP Extension ZipArchive and PHP Extension xmllib.

*The libxml extension is enabled by default, although it may be disabled with **--disable-libxml**.* By default. So you have to install `libxml` in your system running `sudo apt-get install libxml2-dev`, and php will use it automatically.

ZipArchive can be installed using `pecl` command: `pecl install zip`. Add `extension=zip.so` to your `php.ini` (section **Dynamic Extensions**) when you already have it installed.

Restart the web server once php.ini is edited.