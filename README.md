Convert HTML to DOC
===================

This application will convert HTML inserted in form to DOC

## Adding PHP extensions

You need to enable **PHP Extension ZipArchive** and **PHP Extension xmllib**.

> _The libxml extension is enabled by default, although it may be disabled with **--disable-libxml**._ 

By default. So you have to install `libxml` in your system running `sudo apt-get install libxml2-dev`, and php will use it automatically.

ZipArchive can be installed using `pecl` command: `pecl install zip`. If you haven't installed `pecl` on your machine, type in console `sudo apt-get install php-pear`. 

After installing ZipArchive, you need to include this extension. Add `extension=zip.so` to your `php.ini` (section **Dynamic Extensions**) when you already have it installed.

Restart the web server once php.ini is edited - `sudo service apache2 restart`.

### How to use application

It's very easy to use this application. Just insert your HTML markup inside text area and press Submit button. DOC file will be dynamically generated each time you'll press the button. To download your file, just press green button. It's pretty easy! Isn't it?

You can use content from `test.txt` to test this app.

### Technologies used in this project

In this application I have used the following libraries and technologies:

+ jQuery (to make it much easier to use JavaScript on this website)
+ Bootstrap (to markup well this application)
+ Ajax (to update a web page without reloading the page)
+ PHP (to create a DOC file)