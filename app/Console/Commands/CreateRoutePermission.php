<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateRoutePermission extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-route-permission';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $routes = Route::getRoutes()->getRoutes();

        foreach ($routes as $route) {
            if ($route->getName() != '' && $route->getAction()['middleware']['0'] == 'web') {
                $permission = Permission::where('name', $route->getName())->first();

                if (is_null($permission)) {
                    permission::create(['name' => $route->getName()]);
                }

            }

            
            $roles = Role::with('users')->where('name', 'admin')->get();
            $dataPermission = Permission::pluck('id','id')->all();

            foreach ($roles as $key => $role) {
                $role->syncPermissions($dataPermission);

                foreach ($role->users as $key => $user) {
                    $user->assignRole([$role->id]);
                }
            }
        }

        $this->info('Permission routes added successfully.');
    }
}
