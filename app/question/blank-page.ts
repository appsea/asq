import { EventData } from "tns-core-modules/data/observable";
import { AdService } from "~/admob/ad.service";
import { QuestionViewModel } from "~/question/question-view-model";
import { QuestionService } from "~/services/question.service";
import * as navigationModule from "../shared/navigation";

export function onPageLoaded(args: EventData) {
    AdService.getInstance().delayedPreloadInterstitial();
    if (QuestionService.getInstance().hasQuestions()) {
        navigationModule.route();
    } else {
        QuestionService.getInstance().readAllQuestions().then(() => {
            navigationModule.route();
        });
    }
}
