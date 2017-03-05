## Installation instructions for Netgen Remote Media Bundle ##

**Requirements**
* eZ Publish 5.4.*

**Installation steps**

* Run the following from your website root folder:
	`$ composer require netgen/remote-media-bundle:^1.0@alpha`
    
* Configure the bundle:
    * in `config.yml` add basic configuration:
    ```
    netgen_remote_media:
        provider: cloudinary
        account_name: [your_cloud_name]
        account_key: [your_key]
        account_secret: [your_secret]
    ```
    
* Configure legacy settings:
    * add the following to `ezoe.ini.append.php` (create one if it does not exist)
    ```
    [EditorSettings]
    Plugins[]=ngremotemedia
    
    [EditorLayout]
    Buttons[]=ngremotemedia
    ```
    
* Activate the bundle:
    ```
    public function registerBundles()
    {
        ...
    
        $bundles[] = new Netgen\Bundle\RemoteMediaBundle\NetgenRemoteMediaBundle();
    
        return $bundles;
    }
    ```
    
* Update the database with a custom table:
	* `$ mysql -u<user> -p<password> -h<host> <db_name> < vendor/netgen/remote-media-bundle/Netgen/Bundle/RemoteMediaBundle/Resources/sql/mysql/schema.sql`
    * **OR** run `php ezpublish/console doctrine:schema:update --force` (or run with `--dump-sql` to get the sql needed for creating the table)

* Clear the caches
    * run the following command:
    ```
    $ php ezpublish/console cache:clear
    ```