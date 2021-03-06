<?php namespace Acme\Settings\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateAcmeSettingsFeedback2 extends Migration
{
    public function up()
    {
        Schema::table('acme_settings_feedback', function($table)
        {
            $table->integer('status')->default(0)->change();
        });
    }
    
    public function down()
    {
        Schema::table('acme_settings_feedback', function($table)
        {
            $table->integer('status')->default(null)->change();
        });
    }
}
