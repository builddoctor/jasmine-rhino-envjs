(function() {
    
    if (! jasmine) {
        throw new Exception("jasmine library does not exist in global namespace!");
    }
    
    /**
     * Basic reporter that outputs spec results to the browser console.
     * Useful if you need to test an html page and don't want the TrivialReporter
     * markup mucking things up.
     *
     * Usage:
     *
     * jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
     * jasmine.getEnv().execute();
     */
    var ConsoleReporter = function() {
        this.started = false;
        this.finished = false;
    };
    
    ConsoleReporter.prototype = {
        reportRunnerResults: function(runner) {
            this.finished = true;
            this.log("Runner Finished.");
        },

        reportRunnerStarting: function(runner) {
            this.started = true;
            this.log("Runner Started.");
        },

        reportSpecResults: function(spec) {
            var resultText = "Failed.";
            
            if (spec.results().passed()) {
                resultText = "Passed.";
            }
            
            this.log(resultText);
        },

        reportSpecStarting: function(spec) {
            this.log(spec.suite.description + ' : ' + spec.description + ' ... ');
        },

        reportSuiteResults: function(suite) {
            var results = suite.results();
            
            this.log(suite.description + ": " + results.passedCount + " of " + results.totalCount + " passed.");
        },
        
        log: function(str) {
            var console = jasmine.getGlobal().console;
            
            if (console && console.log) {
                console.log(str);
            }
        }
    };
    
    // export public
    jasmine.ConsoleReporter = ConsoleReporter;
})();
