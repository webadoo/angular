import { NgZone } from 'angular2/src/core/zone/ng_zone';
import { Provider } from 'angular2/src/core/di';
import { Parse5DomAdapter } from 'angular2/src/platform/server/parse5_adapter';
import { PostMessageBus, PostMessageBusSink, PostMessageBusSource } from 'angular2/src/web_workers/shared/post_message_bus';
import { WORKER_APP_APPLICATION_COMMON } from './worker_app_common';
import { APP_INITIALIZER } from 'angular2/core';
import { MessageBus } from 'angular2/src/web_workers/shared/message_bus';
import { COMPILER_PROVIDERS } from 'angular2/src/compiler/compiler';
// TODO(jteplitz602) remove this and compile with lib.webworker.d.ts (#3492)
let _postMessage = {
    postMessage: (message, transferrables) => {
        postMessage(message, transferrables);
    }
};
export const WORKER_APP_APPLICATION = [
    WORKER_APP_APPLICATION_COMMON,
    COMPILER_PROVIDERS,
    new Provider(MessageBus, { useFactory: createMessageBus, deps: [NgZone] }),
    new Provider(APP_INITIALIZER, { useValue: setupWebWorker, multi: true })
];
function createMessageBus(zone) {
    let sink = new PostMessageBusSink(_postMessage);
    let source = new PostMessageBusSource();
    let bus = new PostMessageBus(sink, source);
    bus.attachToZone(zone);
    return bus;
}
function setupWebWorker() {
    Parse5DomAdapter.makeCurrent();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtWWNtRzhYU2EudG1wL2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0NBQWdDO09BRTlDLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCO09BQ3RDLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2Q0FBNkM7T0FDckUsRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixNQUFNLGtEQUFrRDtPQUNsRCxFQUFDLDZCQUE2QixFQUFDLE1BQU0scUJBQXFCO09BQzFELEVBQUMsZUFBZSxFQUFDLE1BQU0sZUFBZTtPQUN0QyxFQUFDLFVBQVUsRUFBQyxNQUFNLDZDQUE2QztPQUMvRCxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0NBQWdDO0FBRWpFLDRFQUE0RTtBQUM1RSxJQUFJLFlBQVksR0FBRztJQUNqQixXQUFXLEVBQUUsQ0FBQyxPQUFZLEVBQUUsY0FBNkI7UUFDakQsV0FBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQztBQUVGLE9BQU8sTUFBTSxzQkFBc0IsR0FBMkM7SUFDNUUsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQztJQUN4RSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztDQUN2RSxDQUFDO0FBRUYsMEJBQTBCLElBQVk7SUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRDtJQUNFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvem9uZS9uZ196b25lJztcbmltcG9ydCB7VHlwZSwgQ09OU1RfRVhQUiwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtQYXJzZTVEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vc2VydmVyL3BhcnNlNV9hZGFwdGVyJztcbmltcG9ydCB7XG4gIFBvc3RNZXNzYWdlQnVzLFxuICBQb3N0TWVzc2FnZUJ1c1NpbmssXG4gIFBvc3RNZXNzYWdlQnVzU291cmNlXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvcG9zdF9tZXNzYWdlX2J1cyc7XG5pbXBvcnQge1dPUktFUl9BUFBfQVBQTElDQVRJT05fQ09NTU9OfSBmcm9tICcuL3dvcmtlcl9hcHBfY29tbW9uJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUJ1c30gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9tZXNzYWdlX2J1cyc7XG5pbXBvcnQge0NPTVBJTEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NvbXBpbGVyJztcblxuLy8gVE9ETyhqdGVwbGl0ejYwMikgcmVtb3ZlIHRoaXMgYW5kIGNvbXBpbGUgd2l0aCBsaWIud2Vid29ya2VyLmQudHMgKCMzNDkyKVxubGV0IF9wb3N0TWVzc2FnZSA9IHtcbiAgcG9zdE1lc3NhZ2U6IChtZXNzYWdlOiBhbnksIHRyYW5zZmVycmFibGVzPzpbQXJyYXlCdWZmZXJdKSA9PiB7XG4gICAgKDxhbnk+cG9zdE1lc3NhZ2UpKG1lc3NhZ2UsIHRyYW5zZmVycmFibGVzKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9BUFBfQVBQTElDQVRJT046IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID0gW1xuICBXT1JLRVJfQVBQX0FQUExJQ0FUSU9OX0NPTU1PTixcbiAgQ09NUElMRVJfUFJPVklERVJTLFxuICBuZXcgUHJvdmlkZXIoTWVzc2FnZUJ1cywge3VzZUZhY3Rvcnk6IGNyZWF0ZU1lc3NhZ2VCdXMsIGRlcHM6IFtOZ1pvbmVdfSksXG4gIG5ldyBQcm92aWRlcihBUFBfSU5JVElBTElaRVIsIHt1c2VWYWx1ZTogc2V0dXBXZWJXb3JrZXIsIG11bHRpOiB0cnVlfSlcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VCdXMoem9uZTogTmdab25lKTogTWVzc2FnZUJ1cyB7XG4gIGxldCBzaW5rID0gbmV3IFBvc3RNZXNzYWdlQnVzU2luayhfcG9zdE1lc3NhZ2UpO1xuICBsZXQgc291cmNlID0gbmV3IFBvc3RNZXNzYWdlQnVzU291cmNlKCk7XG4gIGxldCBidXMgPSBuZXcgUG9zdE1lc3NhZ2VCdXMoc2luaywgc291cmNlKTtcbiAgYnVzLmF0dGFjaFRvWm9uZSh6b25lKTtcbiAgcmV0dXJuIGJ1cztcbn1cblxuZnVuY3Rpb24gc2V0dXBXZWJXb3JrZXIoKTogdm9pZCB7XG4gIFBhcnNlNURvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcbn1cbiJdfQ==