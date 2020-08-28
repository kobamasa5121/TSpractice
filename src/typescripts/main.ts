import "../stylesheets/main.scss";

//プロジェクト情報の入力
class ProjectInput {
  //入力欄のテンプレート
  templateElement: HTMLTemplateElement;
  //レンダリングする要素
  hostElement: HTMLDivElement;
  //入力欄テンプレートのコピー保存用
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  //インスタンス作成時に入力欄を作成
  constructor() {
    //「!」をつけるとnullでないことを示すことができる
    //「<Type> Hoge」や「hoge as Type」で型キャストができる

    //入力欄テンプレートとレンダー用要素の取得
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this.hostElement = <HTMLDivElement>document.getElementById("app")!;

    //importNodeで入力欄テンプレートをコピーする
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // 最初の子要素(この場合Form要素)を取得
    this.element = <HTMLFormElement>importedNode.firstElementChild;
    //入力欄のスタイルの設定
    this.element.id = "user-input";

    //各入力欄の値を取得
    this.titleInputElement = <HTMLInputElement>(
      this.element.querySelector("#title")
    );
    this.descriptionInputElement = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.mandayInputElement = <HTMLInputElement>(
      this.element.querySelector("#manday")
    );

    //イベントリスナーを設定
    this.configure();
    //レンダー要素へのアタッチを実行
    this.attach();
  }

  //submitイベントが発火したときに実行される関数
  private submitHandler(event: Event) {
    event.preventDefault;
    console.log(this.titleInputElement.value);
  }

  //イベントリスナーを設定する関数
  private configure() {
      //submitイベントが発火したらsubmitHandlerを実行する
      this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  //レンダー要素へのアタッチを行う関数
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

//インスタンスを作成してにゅうｙ録欄を表示
const prjInput = new ProjectInput();
