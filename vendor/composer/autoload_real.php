<?php

// autoload_real.php @generated by Composer

<<<<<<< HEAD
<<<<<<< HEAD
class ComposerAutoloaderInit320eda6057ab2a3430da636c64ebefa0
=======
class ComposerAutoloaderInit825ea8e74a2d1e3348e35457ac4f3155
>>>>>>> 7cff7b6f7d999335676083119683ca71f058ded3
=======
class ComposerAutoloaderInit825ea8e74a2d1e3348e35457ac4f3155
>>>>>>> 02795f80200353a4fe33a4fe5762f217f2c97a75
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

<<<<<<< HEAD
<<<<<<< HEAD
        spl_autoload_register(array('ComposerAutoloaderInit320eda6057ab2a3430da636c64ebefa0', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInit320eda6057ab2a3430da636c64ebefa0', 'loadClassLoader'));
=======
        spl_autoload_register(array('ComposerAutoloaderInit825ea8e74a2d1e3348e35457ac4f3155', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInit825ea8e74a2d1e3348e35457ac4f3155', 'loadClassLoader'));
>>>>>>> 7cff7b6f7d999335676083119683ca71f058ded3
=======
        spl_autoload_register(array('ComposerAutoloaderInit825ea8e74a2d1e3348e35457ac4f3155', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInit825ea8e74a2d1e3348e35457ac4f3155', 'loadClassLoader'));
>>>>>>> 02795f80200353a4fe33a4fe5762f217f2c97a75

        $useStaticLoader = PHP_VERSION_ID >= 50600 && !defined('HHVM_VERSION') && (!function_exists('zend_loader_file_encoded') || !zend_loader_file_encoded());
        if ($useStaticLoader) {
            require_once __DIR__ . '/autoload_static.php';

<<<<<<< HEAD
<<<<<<< HEAD
            call_user_func(\Composer\Autoload\ComposerStaticInit320eda6057ab2a3430da636c64ebefa0::getInitializer($loader));
=======
            call_user_func(\Composer\Autoload\ComposerStaticInit825ea8e74a2d1e3348e35457ac4f3155::getInitializer($loader));
>>>>>>> 7cff7b6f7d999335676083119683ca71f058ded3
=======
            call_user_func(\Composer\Autoload\ComposerStaticInit825ea8e74a2d1e3348e35457ac4f3155::getInitializer($loader));
>>>>>>> 02795f80200353a4fe33a4fe5762f217f2c97a75
        } else {
            $map = require __DIR__ . '/autoload_namespaces.php';
            foreach ($map as $namespace => $path) {
                $loader->set($namespace, $path);
            }

            $map = require __DIR__ . '/autoload_psr4.php';
            foreach ($map as $namespace => $path) {
                $loader->setPsr4($namespace, $path);
            }

            $classMap = require __DIR__ . '/autoload_classmap.php';
            if ($classMap) {
                $loader->addClassMap($classMap);
            }
        }

        $loader->register(true);

<<<<<<< HEAD
<<<<<<< HEAD
        return $loader;
    }
}
=======
=======
>>>>>>> 02795f80200353a4fe33a4fe5762f217f2c97a75
        if ($useStaticLoader) {
            $includeFiles = Composer\Autoload\ComposerStaticInit825ea8e74a2d1e3348e35457ac4f3155::$files;
        } else {
            $includeFiles = require __DIR__ . '/autoload_files.php';
        }
        foreach ($includeFiles as $fileIdentifier => $file) {
            composerRequire825ea8e74a2d1e3348e35457ac4f3155($fileIdentifier, $file);
        }

        return $loader;
    }
}

function composerRequire825ea8e74a2d1e3348e35457ac4f3155($fileIdentifier, $file)
{
    if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
        require $file;

        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;
    }
}
<<<<<<< HEAD
>>>>>>> 7cff7b6f7d999335676083119683ca71f058ded3
=======
>>>>>>> 02795f80200353a4fe33a4fe5762f217f2c97a75
