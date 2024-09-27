enum OriginData {
 MicrososftDataverse = "Dataverse",
}

enum TypeRequest {
 fetchXml = "fetchXml",
 webApi = "webApi",
}

type RequestSettings = {
 entityName: string;
 fetchXml: string;
 webApi: string;
};

type RequestProps = {
 requestId: string;
 name: string;
 type: TypeRequest;
 origin: OriginData;
 data: RequestSettings;
};

export type { RequestProps }
